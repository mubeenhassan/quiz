import React, { useState, useEffect } from 'react'
import axios from 'axios'

import answer from '../../assets/images/awnser-woman.png'
import Physical from '../../assets/images/Physical.png'
import Emotional from '../../assets/images/Emotional.png'
import Energetic from '../../assets/images/Energetic.png'
import Even from '../../assets/images/Even.png'

let results = {
  physical: {
    how_it_feels: 'As though you are living your life on a rollercoaster.',
    how_it_shows_up:
      'Deep loss or Depression, when you have not seen or heard from them (even when you are no contact) you are always thinking of excuses to contact them.',
    your_biggest_challenge_right_now:
      "You can't see how you will ever feel happy again. Being close to them brings you such an intense feeling of pleasure that you wonder if you should just suffer the pain so you can feel that love one more time.",
    bond: 'You are so powerful and much stronger than you know. But you are strong in a gentle way, a kind, patient, forgiving and compassionate way - it is now time to show yourself all of those things and take the steps towards a future free of drama and filled with peace.',
  },
  emotional: {
    how_it_feels:
      'Like everything you have ever believed or known was a complete lie.',
    how_it_shows_up:
      'Confusion, you replay memories of the past trying to work out if they were real or if you were to blame for the negative outcome of your relationship. You find yourself checking their social media or re reading old messages/looking at old photographs for clues that you have got this all wrong and they are not a narcissist after all.',
    your_biggest_challenge_right_now:
      "You can't see you will ever feel happy again. The pain of the emotions you feel is overwhelming and you don't know how to manage the intensity of them. The thought of a future without this person makes your chest feel tight.",
    bond: 'You can do whatever you want, when you are authentic and true to yourself everything will unfold naturally as it is meant to be. The fear you are feeling is a sign you are on the right path. You are destined to receive everything you desire, release what no longer serves you and trust that the spaced you create will be filled with happiness',
  },
  energetic: {
    how_it_feels:
      'You are drained of all energy, you feel physically, emotionally and spiritually exhausted',
    how_it_shows_up:
      'Out of control, you have this otherwordly connection to the abuser that is difficult to explain. You find yourself being able to sense and predict their every move. You can see deep into the abusers soul and you know how damaged and insecure they truly are.',
    your_biggest_challenge_right_now:
      "You can't see how you this person will never be in your life in someway, you were sure you were destined for one another and resisting their magnetic draw takes a strength that you just don't have right now.",
    bond: 'Your higher self wants you to know that you always have guidance and protection, and to not allow yourself to dwell too long in negativity. You have the power to transform negative energy into positive action and when you do this you are reminded of how capable and powerful you truly are.',
  },
  even: {
    how_it_feels: 'Even',
    how_it_shows_up: 'Even',
    your_biggest_challenge_right_now: 'Even',
    bond: 'Even',
  },
}

const Result = (props) => {
  const {points} = props
  const { PH, EM, EN, VI, AU, KI } = points

  const [email, setEmail] = useState('')
  const [resultsToShow, setResultsToShow] = useState({})
  const [phaseOneResult, setPhaseOneResult] = useState('')
  const [phaseTwoResult, setPhaseTwoResult] = useState('')
  const [answerImg, setAnswerImg] = useState('')
  let redirectLink=null
// push phaseOneResult and phaseTwoResult to google sheet as well
  useEffect(() => {
    countPhaseOne()
    countPhaseTwo()
  }, [])
  const countPhaseOne = () => {
    if (
      (PH > EM && PH > EN) ||
      (PH === EM && PH > EN) ||
      (PH === EN && PH > EM)
    ) {
      setResultsToShow(results.physical)
      setPhaseOneResult('Physical')
      setAnswerImg(Physical)
    } else if (
      (EM > PH && EM > EN) ||
      (EM === EM && EM > PH) ||
      (EM === PH && EM > EN)
    ) {
      setResultsToShow(results.emotional)
      setPhaseOneResult('Emotional')
      setAnswerImg(Emotional)

    } else if (
      (EN > PH && EN > EM) ||
      (EN === PH && EN > EM) ||
      (EN === EM && EN > PH)
    ) {
      setResultsToShow(results.energetic)
      setPhaseOneResult('Energetic')
      setAnswerImg(Energetic)
    } else if (PH === EM && EM === EN) {
      setResultsToShow(results.even)
      setPhaseOneResult('Even')
      setAnswerImg(Even)
    }
  }

  const countPhaseTwo = () => {
    if (
      (VI > AU && VI > KI) ||
      (VI === AU && VI > KI) ||
      (VI === KI && VI > AU)
    ) {
      setPhaseTwoResult('Visual')
    } else if (
      (AU > KI && AU > VI) ||
      (AU === KI && AU > VI) ||
      (AU === VI && AU > KI)
    ) {
      setPhaseTwoResult('Auditory')
    } else if (
      (KI > VI && KI > AU) ||
      (KI === VI && KI > AU) ||
      (KI === AU && KI > VI)
    ) {
      setPhaseTwoResult('Kinaesthetic')
    } else if (VI === AU && VI === KI) {
      setPhaseTwoResult('Evens')
    }
  }
  const handleLinks=()=>{
    if (phaseOneResult==="Physical" && phaseTwoResult==="Visual") {
      redirectLink="ph-vi"
    }
    else if (phaseOneResult==="Physical" && phaseTwoResult==="Auditory") {
      redirectLink="ph-au"
    }
    else if (phaseOneResult==="Physical" && phaseTwoResult==="Kinaesthetic") {
      redirectLink="ph-ki"
    }
    else if (phaseOneResult==="Physical" && phaseTwoResult==="Evens") {
      redirectLink="ph-evs"
    }
    else if (phaseOneResult==="Emotional" && phaseTwoResult==="Visual") {
      redirectLink="em-vi"
    }
    else if (phaseOneResult==="Emotional" && phaseTwoResult==="Auditory") {
      redirectLink="em-au"
    }
    else if (phaseOneResult==="Emotional" && phaseTwoResult==="Kinaesthetic") {
      redirectLink="em-ki"
    }
    else if (phaseOneResult==="Emotional" && phaseTwoResult==="Evens") {
      redirectLink="em-evs"
    }
    else if (phaseOneResult==="Energetic" && phaseTwoResult==="Visual") {
      redirectLink="en-vi"
    }
    else if (phaseOneResult==="Energetic" && phaseTwoResult==="Auditory") {
      redirectLink="en-au"
    }
    else if (phaseOneResult==="Energetic" && phaseTwoResult==="Kinaesthetic") {
      redirectLink="en-ki"
    }
    else if (phaseOneResult==="Energetic" && phaseTwoResult==="Evens") {
      redirectLink="en-evs"
    }
    else if (phaseOneResult==="Even" && phaseTwoResult==="Visual") {
      redirectLink="ev-vi"
    }
    else if (phaseOneResult==="Even" && phaseTwoResult==="Auditory") {
      redirectLink="ev-au"
    }
    else if (phaseOneResult==="Even" && phaseTwoResult==="Kinaesthetic") {
      redirectLink="ev-ki"
    }
    else if (phaseOneResult==="Even" && phaseTwoResult==="Evens") {
      redirectLink="ev-evs"
    }
  }
  const handleSubscribe = (e) => {
    e.preventDefault()
    const poinst_data = {
      Physical: PH,
      Emotional: EM,
      Energetic: EN,
      Visual: VI,
      Auditory: AU,
      Kinaesthetic: KI,
      Email: email,
      PhaseOneResult:phaseOneResult,
      PhaseTwoResult:phaseTwoResult,
    }
    axios
      .post(
        'https://sheet.best/api/sheets/6d559efe-381d-4bea-9fc1-9eec9112ca31',
        poinst_data
      )
      .then((response) => {
        handleLinks()
        window.location.replace(`https://www.youreasylifecoach.com/your-results-${redirectLink}`);
      })
  }
  return (
    <div>
      <br />
      <br />
      <br />
      <div className='container'>
        <div className='physical-truma'>
          <div className='left'>
            <div className='left-truma'>
              <div className='physical-img'>
                <img src={answerImg} alt='' />
              </div>
              <div className='physical-para'>
                <h1>
                  You have a <br /> <span className='phy'> {phaseOneResult}</span>
                  <br /> trauma bond
                </h1>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right-truma'>
              <h1>Your Results</h1>
              <hr className='horizontal' />
              <p>
                <strong>How It Feels: </strong>
                <br />
                {resultsToShow.how_it_feels}
              </p>
              <hr className='horizontal' />
              <p>
                <strong>How It Shows Up:</strong>
                <br />
                {resultsToShow.how_it_shows_up}
              </p>
              <hr className='horizontal' />
              <p>
                <strong>Your Biggest Challenge Right Now:</strong>
                <br />
                {resultsToShow.your_biggest_challenge_right_now}
              </p>
              <hr className='horizontal' />
              <p>
                <strong> What your higher self wants you to know:</strong>
                <br />
                {resultsToShow.bond}
              </p>
              <hr className='horizontal' />
            </div>
          </div>
        </div>
        <div className='find-out-main'>
          <div className='find-out'>
            <h1>Find out more! </h1>
            <p>
              Learn about your trauma bond type, your subconscious processing
              style and 3 things you do today to start breaking your bond{' '}
            </p>
            <input
              type='email'
              placeholder='enter email address'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <div>
              <button onClick={handleSubscribe}>Go to your 3 steps </button>
              <dir className='shadow-box'></dir>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Result
