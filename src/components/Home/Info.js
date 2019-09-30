import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story"></Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-white mb-5">
              90's tilde 3 wolf moon semiotics photo booth. Raw denim freegan
              asymmetrical, farm-to-table post-ironic venmo tilde artisan 3 wolf
              moon williamsburg kogi unicorn. Bicycle rights hella etsy edison
              bulb mixtape distillery. Sartorial pinterest kale chips helvetica
              hot chicken, knausgaard letterpress. Seitan jean shorts snackwave
              vegan, everyday carry fingerstache butcher celiac XOXO kinfolk
              sustainable craft beer.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-green">
                About Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
