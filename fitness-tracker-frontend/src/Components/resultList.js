import Results from './Results';

function Listresult({data}) {

    const resultList = data.map((value) => 
        <Results data={value} key={value.id} />
    );

    return (
        <ul>
            {resultList}
        </ul>
    )
}

export default Listresult;