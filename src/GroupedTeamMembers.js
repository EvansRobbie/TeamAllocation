import React, {useState} from 'react'

const GroupedTeamMembers = ({employees, selectedTeam, setSelectedTeam}) => {
    

    const groupTeamMembers = () =>{
        var team = []

        const teamAMembers = employees?.filter((employee) =>employee.teamName ==='TeamA')
        const teamA = {team: 'TeamA', members:teamAMembers, collapsed: selectedTeam === 'TeamA'?false:true}
        team.push(teamA)

        const teamBMembers = employees?.filter((employee) =>employee.teamName ==='TeamB')
        const teamB = {team: 'TeamB', members:teamBMembers, collapsed: selectedTeam === 'TeamB'?false:true}
        team.push(teamB)

        const teamCMembers = employees?.filter((employee) =>employee.teamName ==='TeamC')
        const teamC = {team: 'TeamC', members:teamCMembers, collapsed: selectedTeam === 'TeamC'?false:true}
        team.push(teamC)


        const teamDMembers = employees?.filter((employee) =>employee.teamName ==='TeamD')
        const teamD = {team: 'TeamD', members:teamDMembers, collapsed: selectedTeam === 'TeamD'?false:true}
        team.push(teamD)

        return team

    
    }
    const [groupedEmployees, setGroupedEmployees] = useState(groupTeamMembers())
    const handleTeamClick = (team) =>{
        setGroupedEmployees(prevGroup =>{
            return prevGroup.map((groupedData) =>{
                return groupedData.team === team?{...groupedData, collapsed: !groupedData.collapsed}:groupedData
            })
        })
        setSelectedTeam(team )


    }
    const groupElement = groupedEmployees?.map((item) =>{
        return (
            <div key= {item.team} className='card mt-2' style={{cursor:'pointer'}}>
                <h4 id ={item.team} className='card-header text-secondary bg-white' onClick={() =>handleTeamClick(item.team)}>
                    Team Name : {item.team}
                </h4>
                <div id={'collapse_' + item.team} className={item.collapsed === true?'collapse':''}>
                    <hr/>
                    {
                        item.members.map((member) =>{
                        return(
                            <div className='mt-4'>
                                <h5 className='card-title mt-2'>
                                    <span className='text-dark'>Full Name:{member.fullName}</span>
                                </h5>
                                <p>Designation: {member.designation}</p>
                            </div>
                        )
                        })
                    }
                </div>
            </div>
        )
    })
  return (
    <main className='container '>
        <div className='row justify-content-center'>
            <div className='col-8'>
                {groupElement}
            
            </div>

        </div>
        
    </main>
  )
}

export default GroupedTeamMembers