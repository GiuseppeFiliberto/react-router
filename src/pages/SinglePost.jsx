import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function SinglePost() {
    const { id } = useParams();

    const posts = [
        { id: 1, title: "Post One", textBody: "This is the body of post one." },
        { id: 2, title: "Post Two", textBody: "This is the body of post two." },
        { id: 3, title: "Post Three", textBody: "This is the body of post three." },
        { id: 4, title: "Post Four", textBody: "This is the body of post four." },
        { id: 5, title: "Post Five", textBody: "This is the body of post five." },
        { id: 6, title: "Post Six", textBody: "This is the body of post six." },
    ];

    const post = posts.find((post) => post.id === parseInt(id));



    return (
        <>
            <main>
                <div className="container">
                    <div className="card-body p-5">
                        <h1 className="card-title fw-bold mb-5">{post.title}</h1>
                        <p className="card-text fw-bold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos cupiditate, autem dicta eligendi minus animi consequuntur aspernatur accusamus nisi at sit impedit voluptate minima tempore porro! Ullam officia fugit aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nostrum distinctio sit, illo repudiandae quaerat illum necessitatibus, consequatur velit exercitationem tempora aliquam ratione, itaque id porro nemo a fugit tempore.</p>
                    </div>
                </div>
            </main>
        </>
    );
}