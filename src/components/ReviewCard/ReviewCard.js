
export default function ReviewCard({review}){

    const {text, name} = review

    return(
        <>
        <div className="col-md-9 my-5 mx-auto p-3">
            <div className="p-2">
                <figure class="text-center">
                    <blockquote classnName="blockquote">
                        <p>{`"${text}"`}</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                        {name} in <cite title="Source Title">Booksy</cite>
                    </figcaption>
                </figure>
            </div>
        </div>
        </>
    )
}