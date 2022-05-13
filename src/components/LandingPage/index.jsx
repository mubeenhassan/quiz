import React from "react"
import TateTestButton from "../Reused/TateTestButton"
import blackArrow from "../../assets/images/black_arrow.png"
import whiteArrow from "../../assets/images/arrow.png"

const PhysicalImg = "https://media-public.canva.com/4nIMI/MADmds4nIMI/2/s.svg"
const EmotionalImg = "https://media-public.canva.com/In1uw/MADmdmIn1uw/2/s.svg"
const EnergeticImg = "https://media-public.canva.com/xyqpY/MADmdoxyqpY/2/s.svg"
const EvenImg = "https://media-public.canva.com/is-Sk/MADmdgis-Sk/2/s.svg"

const REVIEWS = [
  {
    name: "Mel",
    comment:
      "I was honestly shocked how accurate it was. I teared up a bit because it was like someone finally understood what has been going on in my head.",
    image: PhysicalImg,
    bond: "Physical Trauma Bond",
    class: "physical-c",
  },

  {
    name: "Sarah",
    comment:
      "I can't believe how accurate this was...word for word. I never felt so understood. I thought I was the only one who felt this.",
    image: EmotionalImg,
    bond: "Emotional Trauma Bond",
    class: "emotional-c",
  },

  {
    name: "Kerry",
    comment:
      "It is undeniable how well this explained things for me. Wish I had known about this type of attachment before I met my ex",
    image: EnergeticImg,
    bond: "Energetic Trauma Bond",
    class: "energetic-c",
  },
]
const LandingPage = (props) => {
  return (
    <div className="landingpage">
      <div className="heading-container">
      <TateTestButton arrow={blackArrow} className="first-btn" {...props} />
        <div className="take-test-head">
        <h1>
          "It's so incredible to finally understand what is happening to me
          right now."
        </h1>
        <p>
          Take our Trauma Bond Test and get a "freakishly accurate" description
          of what is showing up for you right now and how to move forward from
          here
        </p>
        </div>
        <TateTestButton arrow={blackArrow} className="first-btn" {...props} />
        <div className="h300" />
      <div className="bond-images">
        <img className="b-img-1" src={PhysicalImg} />
        <img className="b-img-2" src={EmotionalImg} />
        <img className="b-img-3" src={EvenImg} />
        <img className="b-img-4" src={EnergeticImg} />
      </div>
      </div>
     
      <div className="reviews-container">
        <div className="reviews-counter">
          <h2>{props.TestTaken}</h2>
          <h1>Tests taken so far</h1>
          <p>
            Curious how accurate we are about your trauma bond? <br />
            <br />
            <span>Take the test</span> and find out
          </p>
        </div>
        <div className="review-card-container">
          {REVIEWS.map((item, key) => (
            <div key={key} className={`review-card ${item.class}`}>
              <span>,,</span>
              <div className="img-comment">
              <p>"{item.comment}"</p>
              <img src={item.image} alt="bond" />
              </div>
              <h1>
                {item.name} - "{item.bond}"
              </h1>
            </div>
          ))}
        </div>
        <br />
        <br />
        <br />
        <TateTestButton arrow={whiteArrow} className="" {...props} />

      </div>
    </div>
  )
}
export default LandingPage
