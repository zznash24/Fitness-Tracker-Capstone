import Results from './Results';

function Listresult({data, userId}) {

    const resultList = data.map((value) => 
        <Results data={value} userId={userId} key={value.id} />
    );

    return (
        <ul>
            {resultList}
        </ul>
    )
}

export default Listresult;