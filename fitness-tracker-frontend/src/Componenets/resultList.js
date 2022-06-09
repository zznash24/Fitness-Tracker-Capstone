import Result from './Result';

function Listresult({data}) {

    const resultList = data.map((value) => 
        <Result data={value} key={value.id} />
    );

    return (
        <ul>
            {resultList}
        </ul>
    )
}

export default Listresult;