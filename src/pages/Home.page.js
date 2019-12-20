import React, { Component } from 'react';
import ProductCard from '../sections/products.section';
import ReviewSection from '../sections/reviews.section';
import ShowCase from '../sections/showcase.section'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [
                {
                    id: 1,
                    imageUrl: "https://images.pexels.com/photos/3353994/pexels-photo-3353994.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    title: "Title # 1",
                    description: "This is description # 1",
                },
                {
                    id: 2,
                    imageUrl: "https://images.pexels.com/photos/2318555/pexels-photo-2318555.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    title: "Title # 2",
                    description: "This is description # 2",
                },
                {
                    id: 3,
                    imageUrl: "https://images.pexels.com/photos/3359742/pexels-photo-3359742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    title: "Title # 3",
                    description: "This is description # 3",
                },
                {
                    id: 4,
                    imageUrl: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 ",
                    title: "Title # 4",
                    description: "This is description # 3",
                },
                {
                    id: 5,
                    imageUrl: "https://images.pexels.com/photos/3171762/pexels-photo-3171762.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    title: "Title # 5",
                    description: "This is description # 3",
                },
                {
                    id: 6,
                    imageUrl: "https://images.pexels.com/photos/3363622/pexels-photo-3363622.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    title: "Title # 6",
                    description: "This is description # 3",
                },
                {
                    id: 7,
                    imageUrl: "https://images.pexels.com/photos/3348363/pexels-photo-3348363.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    title: "Title # 7",
                    description: "This is description # 3",
                },
                {
                    id: 8,
                    imageUrl: "https://images.pexels.com/photos/3319097/pexels-photo-3319097.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    title: "Title # 8",
                    description: "This is description # 3",
                },
                {
                    id: 9,
                    imageUrl: "https://images.pexels.com/photos/3359742/pexels-photo-3359742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    title: "Title # 9",
                    description: "This is description # 3",
                },
                {
                    id: 10,
                    imageUrl: "https://images.pexels.com/photos/3330175/pexels-photo-3330175.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    title: "Title # 10",
                    description: "This is description # 3",
                },
                {
                    id: 11,
                    imageUrl: "https://images.pexels.com/photos/3312671/pexels-photo-3312671.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    title: "Title # 11",
                    description: "This is description # 3",
                },
                {
                    id: 12,
                    imageUrl: "https://images.pexels.com/photos/2688991/pexels-photo-2688991.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    title: "Title # 12",
                    description: "This is description # 3",
                }
            ],
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
    render() {
        return (
            <div className="container-fluid">
                <div className="product-sec">
                    <div className="container">
                        <h1>PRODUCT</h1>
                        <div className="row">
                            {
                                this.state.product.map((card, i) => {
                                    return (
                                        <ProductCard key={i} titleTwo={card.title} description={card.description} image={card.imageUrl} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="showcase-sec">
                    <div className="container">
                        <h1>ENGAGE</h1>
                        <div className="row">
                            <ShowCase />
                        </div>
                    </div>
                </div>
                <div className="review-sec"  style={{  
                            backgroundImage: "url(" + "https://www.elegantthemes.com/images/bloom/bloom-templates-fw.jpg" + ")",
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                            }}>
                    <div className="container">
                        <h1>PRODUCT</h1>
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
            </div>
        )
    }
}

export default HomePage;