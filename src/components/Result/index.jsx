import React, { useState, useEffect } from 'react'
import axios from 'axios'
import processorVisual from "../../assets/images/processor/processor-visual.png"
import processorAuditory from "../../assets/images/processor/processor-auditory.png"
import processorKin from "../../assets/images/processor/processor-kin.png"
import processorEven from "../../assets/images/processor/processor-even.png"

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
let resultPhaseTwo= {
  visual:"You have indicated that you have a visual processing style. In order to communicate your desire to break your trauma bond to your subconscious you need to take actions and practice techniques which will break the bond in a way that you can see happening. Your tendency to move, think and talk faster than most means that you have the capacity to access a lot of information quickly leaving you little time to really describe what is going on in your head. By incorporating diagrams, imagery and guided visualisations into your process you can start to gain clarity over what life looks like without your trauma bond and your mind will soon be as uncluttered as you like your desk to be.",
  auditory:"You have indicated that you have an auditory processing style. In order to communicate your desire to break your trauma bond to your subconscious you need to take actions and practice techniques which will break the bond in a way that you can hear happening. Your tendency to understand better by listening and talking means you can easily repeat both negative and positive conversations back to yourself with accuracy. This is important since it is within these words that the truth lies. By incorporating music, mantras and the spoken word into your process you can break your trauma bond in a way that facilitates the harmonious life you desire.",
  kinaesthetic:"You have indicated that you have a kinaesthetic processing style. In order to communicate your desire to break your trauma bond to your subconscious you need to take actions and practice techniques which will break the bond in a way that you can feel happening. Your tendency to memorise by trying, experiencing and walking through things means you are most interested in doing the things that 'feel right' to you. This is important since it is with actions that communicate your desire to sever the strands of your trauma bond you will truly feel free and able to breathe deeply again.",
  evens:"You have indicated that you have an even mix of all of the processing styles. This is excellent news as it means that in order to communicate your desire to break your trauma bond to your subconscious you can take a wide range of actions and practice techniques which will break the bond in a way that you can see, hear and feel happening. Your broad and open processing style means that you are able to understand and pay attention in many different settings and for long periods of time. You are a quick learner and your 'can-do' attitude will serve you well as you take your first steps to break your trauma bond."
}

const Result = (props) => {
  const {points} = props
  const { PH, EM, EN, VI, AU, KI } = points
  let groupId=null
  const [finish, setFinish]=useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [resultsToShow, setResultsToShow] = useState({})
  const [resultsToShowPhasetwo, setResultsToShowPhaseTwo] = useState("")
  const [phaseOneResult, setPhaseOneResult] = useState('')
  const [phaseTwoResult, setPhaseTwoResult] = useState('')
  const [answerImg, setAnswerImg] = useState('')
  const [answerImg2, setAnswerImg2] = useState('')
  // const [phaseOneLink, setPhaseOneLink] = useState('')
  // const [phaseTwoLink, setPhaseTwoLink] = useState('')
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setFinish(true)
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
      // setPhaseOneLink('ph')
      setAnswerImg("https://media-public.canva.com/4nIMI/MADmds4nIMI/2/s.svg")
    } else if (
      (EM > PH && EM > EN) ||
      (EM === EM && EM > PH) ||
      (EM === PH && EM > EN)
    ) {
      setResultsToShow(results.emotional)
      setPhaseOneResult('Emotional')
      // setPhaseOneLink('em')
      setAnswerImg("https://media-public.canva.com/In1uw/MADmdmIn1uw/2/s.svg")
    } else if (
      (EN > PH && EN > EM) ||
      (EN === PH && EN > EM) ||
      (EN === EM && EN > PH)
    ) {
      setResultsToShow(results.energetic)
      setPhaseOneResult('Energetic')
      // setPhaseOneLink('en')
      setAnswerImg("https://media-public.canva.com/xyqpY/MADmdoxyqpY/2/s.svg")
    } else if (PH === EM && EM === EN) {
      setResultsToShow(results.even)
      setPhaseOneResult('Even')
      // setPhaseOneLink('ev')
      setAnswerImg("https://media-public.canva.com/is-Sk/MADmdgis-Sk/2/s.svg")
    }
  }

  const countPhaseTwo = () => {
    if (
      (VI > AU && VI > KI) ||
      (VI === AU && VI > KI) ||
      (VI === KI && VI > AU)
    ) {
      setResultsToShowPhaseTwo(resultPhaseTwo.visual)
      setPhaseTwoResult('Visual')
      setAnswerImg2(processorVisual)
      // setPhaseTwoLink('vi')
    } else if (
      (AU > KI && AU > VI) ||
      (AU === KI && AU > VI) ||
      (AU === VI && AU > KI)
    ) {
      setResultsToShowPhaseTwo(resultPhaseTwo.auditory)
      setPhaseTwoResult('Auditory')
      setAnswerImg2(processorAuditory)
      // setPhaseTwoLink('au')
    } else if (
      (KI > VI && KI > AU) ||
      (KI === VI && KI > AU) ||
      (KI === AU && KI > VI)
    ) {
      setResultsToShowPhaseTwo(resultPhaseTwo.kinaesthetic)
      setPhaseTwoResult('Kinaesthetic')
      setAnswerImg2(processorKin)
      // setPhaseTwoLink('ki')
    } else if (VI === AU && VI === KI) {
      setResultsToShowPhaseTwo(resultPhaseTwo.evens)
      setPhaseTwoResult('Evens')
      // setPhaseTwoLink('evs')
      setAnswerImg2(processorEven)
    }
  }

  const GroupId = ()=>{
    if(phaseOneResult==='Emotional' && phaseTwoResult==='Auditory'){
      return  groupId=111082042
    }
    else if(phaseOneResult==='Emotional' && phaseTwoResult==='Evens'){
      return  groupId=111082046
    }
    else if(phaseOneResult==='Emotional' && phaseTwoResult==='Kinaesthetic'){
      return groupId =111082044
    }
    else if(phaseOneResult==='Emotional' && phaseTwoResult==='Visual'){
      return groupId =111082041
    }
    else if(phaseOneResult==='Energetic' && phaseTwoResult==='Auditory'){
      return groupId =111082048
    }
    else if(phaseOneResult==='Energetic' && phaseTwoResult==='Evens'){
      return groupId =111082051
    }
    else if(phaseOneResult==='Energetic' && phaseTwoResult==='Kinaesthetic'){
      return groupId =111082050
    }
    else if(phaseOneResult==='Energetic' && phaseTwoResult==='Visual'){
      return groupId =111082047
    }
    else if(phaseOneResult==='Even' && phaseTwoResult==='Auditory'){
      return groupId =111082066
    }
    else if(phaseOneResult==='Even' && phaseTwoResult==='Evens'){
      return groupId =111082069
    }
    else if(phaseOneResult==='Even' && phaseTwoResult==='Kinaesthetic'){
      return groupId =111082068
    }
    else if(phaseOneResult==='Even' && phaseTwoResult==='Visual'){
      return groupId =111082055
    }
    else if(phaseOneResult==='Physical' && phaseTwoResult==='Auditory'){
      return groupId =111082034
    }
    else if(phaseOneResult==='Physical' && phaseTwoResult==='Evens'){
      return groupId =111082036
    }
    else if(phaseOneResult==='Physical' && phaseTwoResult==='Kinaesthetic'){
      return groupId =111082035
    }
    else if(phaseOneResult==='Physical' && phaseTwoResult==='Visual'){
      return groupId =111082033
    }
  }
 
  const handleResultSubmit = (e) => {
    GroupId()
    // e.preventDefault()
    const poinst_data = {
      Physical: PH,
      Emotional: EM,
      Energetic: EN,
      Visual: VI,
      Auditory: AU,
      Kinaesthetic: KI,
      PhaseOneResult : phaseOneResult,
      PhaseTwoResult : phaseTwoResult,
      SendToMailerLiteGroup : phaseOneResult+"/"+phaseTwoResult,
      GroupID:groupId
    }
    axios
      .post(
        'https://sheet.best/api/sheets/c2d16891-8c57-463d-8fc0-493e27918e79',
        poinst_data
      )
      .then((response) => {
        // window.location.replace(`https://www.youreasylifecoach.com/your-results-${phaseOneLink}-${phaseTwoLink}`);
      })
  }
  const handleSubscribe = (e) => {
    GroupId()

    // e.preventDefault()
    const subscribe_data = {
      Physical: PH,
      Emotional: EM,
      Energetic: EN,
      Visual: VI,
      Auditory: AU,
      Kinaesthetic: KI,
      Email: email,
      FirstName:name,
      PhaseOneResult : phaseOneResult,
      PhaseTwoResult : phaseTwoResult,
      SendToMailerLiteGroup : phaseOneResult+"/"+phaseTwoResult,
      GroupID:groupId
    }
    axios
      .post(
        'https://sheet.best/api/sheets/e67186d6-be8e-445a-b61c-3c5e61f1202b',
        subscribe_data
      )
      .then((res)=>{
        window.location.reload()
      })
  }
  if(finish) {
    handleResultSubmit()
    setFinish(false)

  }
  const a_or_an = (phaseOneResult==='Emotional' || phaseOneResult==='Energetic'|| phaseOneResult==='Even') ? 'an':'a'
  return (
      <div className='container'>
        <div className="result-container">
        <div className='physical-truma'>
          <div className='left'>
            <div className='left-truma'>
              <div className='physical-img'>
                <img src={answerImg} alt='' />
              </div>
              <div className='physical-para'>
                <h1>
                  You have {a_or_an}                  
                   <br /> <span className='phy'> {phaseOneResult}</span>
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
        </div>
        <div className="result-container phasetwoResults">
        <div className='physical-truma'>
        <div className='right'>
            <div className='right-truma'>
              <h1>and...</h1>
              <p>
               {resultsToShowPhasetwo}
              </p>
            </div>
          </div>
          <div className='left'>
            <div className='left-truma'>
              <div className='physical-img'>
                <img src={answerImg2} alt='' />
              </div>
              <div className='physical-para'>
                <h1>
                  You are a                  
                   <br /> <span className='phy'> {phaseTwoResult}</span>
                  <br /> processor
                </h1>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="know-more">
          <h1>Do you want to know more?</h1>
          <h3>Enter your details to get a full breakdown and find out what THREE ACTIONS you can take TODAY to start breaking your bond</h3>
        </div>
        
         <div className='find-out-main'>
          <div className='find-out'>
            <h1>Find out more! </h1>
            <p>
              Learn about your trauma bond type, your subconscious processing style and 3 things you can do today to start breaking your bond
            </p>
            <input
              type='name'
              placeholder='First Name'
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type='email'
              placeholder='Enter Email Address'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required={true}
            />
            <div>
              <button onClick={handleSubscribe}>Go to your 3 steps </button>
              <dir className='shadow-box'></dir>
            </div>
          </div>
        </div> 
      </div>
  )
}
export default Result
