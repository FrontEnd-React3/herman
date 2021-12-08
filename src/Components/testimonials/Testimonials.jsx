import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    // {
    //   id: 1,
    //   name: "Sara Durden",
    //   title: "Senior Developer",
    //   img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   icon: "assets/twitter.png",
    //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    // },
    {
      id: 2,
      name: "Benedikt",
      title: "Teacher @Intec",
      img: "https://media-exp1.licdn.com/dms/image/C4E03AQFZQaA_NM5wpw/profile-displayphoto-shrink_800_800/0/1535225134088?e=1636588800&v=beta&t=XncDi6yns1kkAU1J8s9PzQ33xR1cOPm7jqY8K9ozU_o",
      icon: "assets/linkedin.png",
      desc: "'Tiago is praised for his constant will to discover and to improve. I am very happy  about his discipline and organization. He is a man of his word and truly loves to code.'",
      featured: true,
    },
    // {
    //   id: 3,
    //   name: "Martin Harold",
    //   title: "CEO of ALBI",
    //   img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   icon: "assets/youtube.png",
    //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    // },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1> Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
