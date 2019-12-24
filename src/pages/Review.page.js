import React from "react";
import ReviewSection from "../sections/reviews.section";

class ReviewPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            reviews: [
                {
                    id: 1,
                    name: "User 1",
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOMSGuOjzz605qtEaVmwwxXWZtwXzGI5eVdjM1Qp5ySKQJEKPHqQ&s",
                    comment: "this is a comment",
                    date: "20/12/2019"
                },
                {
                    id: 1,
                    name: "User 2",
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOMSGuOjzz605qtEaVmwwxXWZtwXzGI5eVdjM1Qp5ySKQJEKPHqQ&s",
                    comment: "this is a comment",
                    date: "20/12/2019"
                },
                {
                    id: 1,
                    name: "User 3",
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOMSGuOjzz605qtEaVmwwxXWZtwXzGI5eVdjM1Qp5ySKQJEKPHqQ&s",
                    comment: "this is a comment",
                    date: "20/12/2019"
                },
                {
                    id: 1,
                    name: "User 4",
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOMSGuOjzz605qtEaVmwwxXWZtwXzGI5eVdjM1Qp5ySKQJEKPHqQ&s",
                    comment: "this is a comment",
                    date: "20/12/2019"
                },
                {
                    id: 1,
                    name: "User 5",
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOMSGuOjzz605qtEaVmwwxXWZtwXzGI5eVdjM1Qp5ySKQJEKPHqQ&s",
                    comment: "this is a comment",
                    date: "20/12/2019"
                },
                {
                    id: 1,
                    name: "User 6",
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOMSGuOjzz605qtEaVmwwxXWZtwXzGI5eVdjM1Qp5ySKQJEKPHqQ&s",
                    comment: "this is a comment",
                    date: "20/12/2019"
                }
            ]
        }
    }

    render(){
        return(
            <React.Fragment>
                
            <div className="review-sec"  style={{  
                            backgroundImage: "url(" + "https://www.elegantthemes.com/images/bloom/bloom-templates-fw.jpg" + ")",
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                            }}>
                    <div className="container">
                        <h1>REVIEWS</h1>
                        <div className="row">
                            {
                                this.state.reviews.map((reviewcard, i) => {
                                    return (
                                        <ReviewSection key={i} name={reviewcard.name} comment={reviewcard.comment} image={reviewcard.imageUrl} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default ReviewPage;