import React from 'react'

export default function Home() {
  return (
    <>
    <div className="text-center mt-2  ">
        <h1 className=' display-4'>Pricing</h1>
        <p className ='fs-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta molestiae tempora repellendus ullam! Quam, sint, ex pariatur, sed quos perferendis sapiente tenetur dolorem vitae animi non deleniti aliquid tempore ducimus.</p>
    </div>
    <div class="container">
    <div className="row ">
    <div className="col-sm-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card 1</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    <div className="col-sm-4 ">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card 2</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    <div className="col-sm-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card 3</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
  </div>
    
    </>
  )
}

