

const Group8Members = () => {
    const members = [
        'Ammar',
        'Andinet',
        'Aman',
        'Top',
        'John',
        'Mike',
        'Mane',
        'Anteneh',
        'Af',
    ];

    return (
        <div>
            <h2>Group 8 Members:- </h2>
            <ul>
                {members.map((member,index) =>(
                    <li key={index}>{member}</li>
                ))}
            </ul>
        </div>
    );
}

export default Group8Members;