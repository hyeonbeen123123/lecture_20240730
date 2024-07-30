import React from 'react'

const CheckEmailPage = () => {
    return (
        <div className='mt-5'>
            <div className='bg-white w-full max-w-sm mx-2 rounded overflow-hidden p-4 mx-auto'> 
                <h3>로그인 확인 페이지<h3>
                <form className='grid gap-4 mt-5 ' onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='name'>성명 : </label>
                        <input className='bg-slate-200 px-2 py-1' type='text' id='name' name='name' onChange={hangleOnChange}/>
                    </div>
                    <button className='bg-primary text-lg px-4 py-1 hover:bg-secondary rounded mt-2 font-bold text-white leading-relaxed tracking-wide '>
                        가입하기
                    </button>
                </form>
            </div>
        </div> 
    )
}

export default CheckEmailPage