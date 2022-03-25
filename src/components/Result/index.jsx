import React from 'react'

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
}

const Result = ({ points }) => {
  const renderResult = () => {
    let result = {}
    const { PH, EM, EN, VI, AU, KI } = points
    if (
      (PH > EM && PH > EN) ||
      (PH === EM && PH > EN) ||
      (PH === EN && PH > EM)
    ) {
      result = results.physical
    } else if (
      (EM > PH && EM > EN) ||
      (EM === EM && EM > PH) ||
      (EM === PH && EM > EN)
    ) {
      result = results.emotional
    } else if (
      (EN > PH && EN > EM) ||
      (EN === PH && EN > EM) ||
      (EN === EM && EN > PH)
    ) {
      result = results.energetic
    } else if (PH === EM && EM === EN) {
      result = 'EVEN'
    }
    return result
  }
  return (
    <div>
      <br />
      <br />
      <br />
      <h1>Your Results</h1>
      <p>
        <strong>How It Feels:</strong>
        {renderResult().how_it_feels}
      </p>
      <p>
        <strong>How It Shows Up:</strong>
        {renderResult().how_it_shows_up}
      </p>
      <p>
        <strong>Your Biggest Challenge Right Now:</strong>
        {renderResult().your_biggest_challenge_right_now}
      </p>
      <p>
        <strong>What your higher self wants you to know:</strong>
        {renderResult().bond}
      </p>
    </div>
  )
}
export default Result
