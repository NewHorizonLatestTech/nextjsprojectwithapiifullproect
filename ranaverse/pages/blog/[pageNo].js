export const getStaticPaths = async () => {
    const hello = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await hello.json();


    const paths = data.map((curElem) => {
        return {
            params: {
                pageNo: curElem.id.toString()
            },
        };
    });

    return {
        paths,
        fallback: false,
    }

};


export const getStaticProps = async (context) => {
    const userId = context.params.pageNo;
    const hello = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`);
    const data = await hello.json();

    return {
        props: {
            data,
        },
    };
};

function pageNo({ data }) {
    return (
        <>
            <div key={data.userId}>
                <h3>{data.userId}</h3>
                <h2>{data.title}</h2>
                <p>{data.body}</p>
            </div>
        </>
    )
}

export default pageNo


