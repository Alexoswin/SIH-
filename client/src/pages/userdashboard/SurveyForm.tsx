import React, { useState } from 'react';

import "./surveyForm.scss"
const SurveyForm: React.FC = () => {
    const [responses, setResponses] = useState({
        initialDrugUseReason: '',
        keyFactors: '',
        impactOfAddiction: '',
        soughtTreatment: '',
        biggestBarrier: '',
        societyAttitude: '',
        mostHelpfulRecovery: '',
        importantSupport: '',
        effectivenessOfPolicies: '',
        culturalInfluence: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setResponses({
            ...responses,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(responses);
        // Process the form data here
    };

    return (
        <form onSubmit={handleSubmit}><br></br>
            <center><h2><i>Survey Form</i></h2></center><br></br>
            <div className='question'>
                <div>
                <p>1. What initially led you to use drugs?</p>
                <label>
                    <input type="radio" name="initialDrugUseReason" value="curiosity" onChange={handleChange} />
                    Curiosity or experimentation<br></br>
                    <input type="radio" name="initialDrugUseReason" value="curiosity" onChange={handleChange} />
                    Peer pressure or social influence<br></br>
                    <input type="radio" name="initialDrugUseReason" value="curiosity" onChange={handleChange} />
                    To cope with stress or emotional issues<br></br>


                </label>
                {/* Additional options */}
            </div>
            <br></br>
            <div>
                <p>2. What were the key factors that contributed to your drug addiction?</p>
                <label>
                    <input type="radio" name="keyFactors" value="accessibility" onChange={handleChange} />
                    Accessibility of drugs<br></br>
                    <input type="radio" name="keyFactors" value="accessibility" onChange={handleChange} />
                    Chronic stress or mental health issues<br></br>
                    <input type="radio" name="keyFactors" value="accessibility" onChange={handleChange} />
                    Social environment or peer group<br></br>

                </label>
                {/* Additional options */}
            </div>
            <br></br>
            {/* Repeat the pattern for each question */}
            <div>
                <p>3. How has drug addiction most significantly affected your life?</p>
                <label>
                    <input type="radio" name="impactOfAddiction" value="physicalHealth" onChange={handleChange} />
                    Physical health deterioration<br></br>
                    <input type="radio" name="impactOfAddiction" value="physicalHealth" onChange={handleChange} />
                    Strained relationships with family and friends<br></br>
                    <input type="radio" name="impactOfAddiction" value="physicalHealth" onChange={handleChange} />
                    Difficulty maintaining employment or education<br></br>
                    <input type="radio" name="impactOfAddiction" value="physicalHealth" onChange={handleChange} />
                    Legal problems or criminal offenses<br></br>

                </label>
                {/* Additional options */}
            </div>
            <br></br>
            <div>
                <p>4. Have you sought treatment for drug addiction?</p>
                <label>
                    <input type="radio" name="soughtTreatment" value="yes" onChange={handleChange} />
                    Yes<br></br>
                    <input type="radio" name="soughtTreatment" value="no" onChange={handleChange} />
                    No<br></br>
                    <input type="radio" name="soughtTreatment" value="drugAddiction" onChange={handleChange} />
                    Currently considering it<br></br>
                    <input type="radio" name="soughtTreatment" value="drugAddiction" onChange={handleChange} />
                    Perceptions and Barriers<br></br>

                </label>
                {/* Additional options */}
            </div>
            <br></br>
            <div>
                <p>5. What do you believe is the biggest barrier to seeking treatment?</p>
                <label>
                    <input type="radio" name="biggestBarrier" value="stigma" onChange={handleChange} />
                    Stigma and social judgment<br></br>
                    <input type="radio" name="biggestBarrier" value="stigma" onChange={handleChange} />
                    Financial constraints<br></br>
                    <input type="radio" name="biggestBarrier" value="stigma" onChange={handleChange} />
                    Lack of support or resources<br></br>
                    <input type="radio" name="biggestBarrier" value="stigma" onChange={handleChange} />
                    Fear or not ready to stop<br></br>
        
                </label>
                {/* Additional options */}
            </div>
            <br></br>
            <div>
                <p>6. How do you perceive society's attitude towards drug addiction?</p>
                <label>
                    <input type="radio" name="societyAttitude" value="sympathetic" onChange={handleChange} />
                    Largely sympathetic and supportive<br></br>
                    <input type="radio" name="societyAttitude" value="sympathetic" onChange={handleChange} />
                    Judgemental or stigmatizing<br></br>
                    <input type="radio" name="societyAttitude" value="sympathetic" onChange={handleChange} />
                    Indifferent or uninformed<br></br>

                </label>
                {/* Additional options */}
            </div>
            <br></br>
            <div>
                <p>7. If you are in recovery, what has been most helpful?</p>
                <label>
                    <input type="radio" name="mostHelpfulRecovery" value="counseling" onChange={handleChange} />
                    Professional counseling or therapy<br></br>
                    <input type="radio" name="mostHelpfulRecovery" value="counseling" onChange={handleChange} />
                    Support from family and friends<br></br>
                    <input type="radio" name="mostHelpfulRecovery" value="counseling" onChange={handleChange} />
                    Medication or medical treatment<br></br>
                    <input type="radio" name="mostHelpfulRecovery" value="counseling" onChange={handleChange} />
                    Self-help groups or community support<br></br>
                </label>
                {/* Additional options */}
            </div>
            <br></br>
            <div className='question8'>
                <p>8. What type of support do you believe is most important for recovery?</p>
                <label>
                    <input type="radio" name="importantSupport" value="emotional" onChange={handleChange} />
                    Emotional support from loved ones<br></br>
                    <input type="radio" name="importantSupport" value="emotional" onChange={handleChange} />
                    Professional medical and psychological help<br></br>
                    <input type="radio" name="importantSupport" value="emotional" onChange={handleChange} />
                    Financial assistance and stable living conditions<br></br>
                    <input type="radio" name="importantSupport" value="emotional" onChange={handleChange} />
                    Peer support and community groups<br></br>
                    <input type="radio" name="importantSupport" value="emotional" onChange={handleChange} />
                    Policy and Cultural Influences<br></br>

                </label>
                {/* Additional options */}
            </div>
            <br></br>
            <div>
                <p>9. What is your opinion on the effectiveness of current drug policies?</p>
                <label>
                    <input type="radio" name="effectivenessOfPolicies" value="veryEffective" onChange={handleChange} />
                    Very effective<br></br>
                    <input type="radio" name="effectivenessOfPolicies" value="veryEffective" onChange={handleChange} />
                    Somewhat effective<br></br>
                    <input type="radio" name="effectivenessOfPolicies" value="veryEffective" onChange={handleChange} />
                    Ineffective<br></br>
                    <input type="radio" name="effectivenessOfPolicies" value="veryEffective" onChange={handleChange} />
                    Counter productive<br></br>
                    
                </label>
                {/* Additional options */}
            </div>
            <br></br>
            <div>
                <p>10. Do you think your cultural background influences your experience with addiction?</p>
                <label>
                    <input type="radio" name="culturalInfluence" value="significantly" onChange={handleChange} />
                    Yes, significantly <br></br>
                    <input type="radio" name="culturalInfluence" value="significantly" onChange={handleChange} />
                    Somewhat<br></br>
                    <input type="radio" name="culturalInfluence" value="significantly" onChange={handleChange} />
                    Not really <br></br>
                    <input type="radio" name="culturalInfluence" value="significantly" onChange={handleChange} />
                    No, not at All<br></br>
                </label>
                {/* Additional options */}
               
            </div>
            </div>
            <center><button type="submit">Submit</button></center>
        </form>
    );
};

export default SurveyForm;