import React from 'react'
import Faqa from '../styles/Faqa.module.css'
const Faq = () => {
  return (
    <>
    <main className={Faqa.Faqa}>
    <div className={Faqa.title}>
        <h1>Faq</h1>
    </div>
    <div className={Faqa.form}>
        <div className={Faqa.container}>
            <h3>Using Our Site</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                a galley.</p>
        </div>
        <div className={Faqa.container}>
            <h3>Manage Your Account</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                a galley.</p>
        </div>
        <div className={Faqa.container}>
            <h3>Return Policy</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                a galley.</p>
        </div>
        <div className={Faqa.container}>
            <h3>Installment</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                a galley.</p>
        </div>
        <div className={Faqa.container}>
            <h3>Payments</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                a galley.</p>
        </div>
    </div>
</main>
    </>
  )
}

export default Faq