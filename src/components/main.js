import React from 'react'
import segregate from '../assets/segregate.svg'
import { storage } from '../firebase';
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { NavLink } from 'react-router-dom'

function Header(){
    return(
        <div className="flex justify-end sm:pt-4 m-4 text-[#05386b] sm:text-xl font-custom">
            <NavLink to='/' className="py-[5px] px-2 mx-2 font-medium hover:text-white hover:bg-[#05386b] hover:shadow-lg hover:duration-500 rounded-sm">
                Home
            </NavLink>
            <NavLink to='/educate' className="py-[5px] px-2 mx-2 font-medium hover:text-white hover:bg-[#05386b] hover:shadow-lg hover:duration-500 rounded-sm">
                Learn
            </NavLink>
            <button className="py-[5px] px-2 mx-2 font-medium hover:text-white hover:bg-[#05386b] hover:shadow-lg hover:duration-500 rounded-sm">
                <a href='https://github.com/Samar1110/Hackfest2022.git' target='_blank'>Github</a>
            </button>
        </div>
    )
}

//colors - #26695c,#05386b


function Footer(){
    return(
        <div className=' mt-6 sm:mt-4 p-4 font-custom flex justify-center text-base sm:text-xl font-medium'>
            Made by: <a href='https://github.com/Samar1110/Hackfest2022.git' className='text-[#05386b]' target='_blank'> Team Arsenic</a> 
        </div>
    )
}

function Main(){


    function SubmitDiv(){

        const [status,setStatus] = React.useState(false);

    const [data, setData] = React.useState({
        prediction: '',
        img : ''
    })

    const [formdata,setFormdata] = React.useState({
        imgurl:'',
    })

    const [progress, setProgress] = React.useState(0)

    React.useEffect(()=>{
            fetch('https://waste-segregation-backend.herokuapp.com/predict', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({
				"image" : data.img
			})
		})
		.then(res => res.json())
		.then(dataset => {
			console.log(dataset);
            setData({...data, prediction : dataset.predict})
		})
		.catch(err=>{
            console.log(err);
			console.log("Some Error while processing the image.")
		})
    },[data.img])
    
    function handleImage(e){
        setFormdata({imgurl : e.target.files[0]})
    }

    const handleSubmit = () => {

        setStatus(true)
        const storageRef = ref(storage, `/images/${Date.now()}${formdata.imgurl.name}`)
        const uploadImg = uploadBytesResumable(storageRef,formdata.imgurl)

        uploadImg.on("state_changed",
        (snapshot) => {
            const progresspercent =  ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100
                setProgress(progresspercent)
        },
        (err) => {
            console.log(err)
        },
        ()=>{
            getDownloadURL(uploadImg.snapshot.ref)
            .then((url)=>{
                console.log(url)
                setData({...data, img:url})
                console.log(data)
            })
        })
    }

    const handleReset = async(e) => {
        setStatus(false)
        setData({
            img : '',
            prediction : '',
        })
        try{
            const storeRef = ref(storage, data.img)
            await deleteObject(storeRef)

        } catch(err){
            console.log(err)
        }
        // window.location.reload(false)
    }

    React.useEffect(()=>{
        <SubmitDiv status = {status} img = {data.img}/>
    },[data.img])

        return(
            <div>
            {status == true ? (
                <div className='flex flex-col justify-center items-center'>
                    <img src={data.img} alt='Loading...' className='p-4 w-32'></img>
                    <div className='font-custom text-base sm:text-xl text-[#05386b] font-medium'>
                        <span className='text-xs p-2'>Progress: {progress} <br/></span>
                        <span className='p-2'>{`${data.prediction}`} <br/></span>
                        <button onClick={(e,img)=>handleReset(e,img)} className='m-2 text-xs sm:text-base px-2 py-[5px] font-medium text-white bg-[#05386b] hover:shadow-lg rounded-sm'> Reset </button>
                    </div>
                </div>
            ) : (
                <div>
                    <input
                        type='file'
                        name='imgurl'
                        accept='image/*'
                        className='text-xs sm:text-base py-2'
                        onChange={(e) => handleImage(e)}
                    />
                    <button onClick={handleSubmit} className='text-xs sm:text-base px-2 py-[5px] font-medium text-white bg-[#05386b] hover:shadow-lg rounded-sm'>Submit</button>
                </div>
            )}
            </div>
        )
    }

    function Content(){
        return(
            <div className="flex flex-col sm:flex-row justify-center mx-8 sm:mx-32 my-8 px-4">
                <div className="font-custom sm:w-1/2">
                    <span className='font-extrabold text-6xl sm:text-8xl text-[#26695c]'>Segre<br/>gator</span>
                    <p className='text-white sm:py-2 py-8 sm:text-xl text-base my-3 font-medium text-justify'> Segregating waste <span className='text-[#05386b]'>eases our waste disposal</span>, helps in <span className='text-[#05386b]'>recycling</span> and is <span className='text-[#05386b]'>good for the environment</span>. Use this tool to segregate waste!</p>
                    <SubmitDiv/>
                </div>
                <div className="sm:w-1/2 flex justify-center items-center px-2 py-8 sm:p-4 ">
                    <img src={segregate} alt='segregate'></img>
                </div>
            </div>
            
        )
    }

    return(
        <div className="flex flex-col">
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )
}

export default Main