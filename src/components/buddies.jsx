import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Buddies() {

    const [game, setGame] = useState(null)
    const [group1, setGroup1] = useState(0)
    const [group2, setGroup2] = useState(0)
    const [group3, setGroup3] = useState(0)
    const [group4, setGroup4] = useState(0)
    const [group5, setGroup5] = useState(0)

    useEffect(() => {
        const updateGame = async () => {
            try {
                const response = await axios.get('http://localhost:8080/v1/api/game');
                console.log(response.data);
                setGame(response.data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };
    
        updateGame();
    
        const time = setInterval(updateGame, 10000);
    
        return () => {
            clearInterval(time);
        };
    }, []);

    
    const handleCardPress = (index) => {
        if (index === 0) setGroup1(group1 + 1);
        if (index === 1) setGroup2(group2 + 1);
        if (index === 2) setGroup3(group3 + 1);
        if (index === 3) setGroup4(group4 + 1);
        if (index === 4) setGroup5(group5 + 1);

        
    }
    
    
    
    const BuddyList = () => {    
        
        /* 
        let Style = {
            boxShadow: "0px 0px 20px 0px rgb(240, 216, 0)",
        }
        */
        
        const buddyElements = game.buddies.map((buddyGroup, index) => {
            
            const maxGroupValue = Math.max(group1, group2, group3, group4, group5);

            let numberOfShots
            let shadowSettings = "0px 0px 20px 0px rgba(0, 0, 0, 0.75)"
            
            if (index === 0) {
                numberOfShots = group1
                if (group1 === maxGroupValue && !(group1 === group2 && group1 === group3 && group1 === group4 && group1 === group5)) {
                    shadowSettings = "0px 0px 20px 0px rgb(240, 216, 0)"
                }
            }
            if (index === 1) {
                numberOfShots = group2
                if (group2 === maxGroupValue && !(group1 === group2 && group1 === group3 && group1 === group4 && group1 === group5)) {
                    shadowSettings = "0px 0px 20px 0px rgb(240, 216, 0)"
                }
            }
            if (index === 2) {
                numberOfShots = group3
                if (group3 === maxGroupValue && !(group1 === group2 && group1 === group3 && group1 === group4 && group1 === group5)) {
                    shadowSettings = "0px 0px 20px 0px rgb(240, 216, 0)"
                }
            }
            if (index === 3) {
                numberOfShots = group4
                if (group4 === maxGroupValue && !(group1 === group2 && group1 === group3 && group1 === group4 && group1 === group5)) {
                    shadowSettings = "0px 0px 20px 0px rgb(240, 216, 0)"
                }
            }
            if (index === 4) {
                numberOfShots = group5
                if (group5 === maxGroupValue && !(group1 === group2 && group1 === group3 && group1 === group4 && group1 === group5)) {
                    shadowSettings = "0px 0px 20px 0px rgb(240, 216, 0)"
                }
            }


            return (
                <a onClick={() => handleCardPress(index)}>
                    <div className='group_card' style={{marginTop:numberOfShots*20, boxShadow:shadowSettings}}>
                        <div className='group_card_members'>
                            <div className='group_member'>
                                <img className='group_member_img' src={buddyGroup[0].url} alt='buddy'/>
                                <h1 className='group_member_name'>{buddyGroup[0].name}</h1>
                            </div>
                            <div className='group_member'>
                                <img className='group_member_img' src={buddyGroup[1].url} alt='buddy'/>
                                <h1 className='group_member_name'>{buddyGroup[1].name}</h1>
                            </div>
                        </div>
                        <br/>
                        <p className='group_member_drinks_title'>🍺 Shot Counter 🍺</p>
                        <br/>
                        <p className='group_member_drinks_subtitle'>{numberOfShots}</p>
                    </div>
                </a>
            );
        });

        return (
            <>
                {buddyElements}
            </>
        )
    }
    

   
    return (
        <div className='buddy_list'>
            {game && <BuddyList/>}
            {!game && <h1>Loading...</h1>}
        </div>
    )
}

export default Buddies;