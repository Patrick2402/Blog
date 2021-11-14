import BlogList from './BlogList';
import useFetch from './useFetch'; // import useFetcha {custom Hook it is} 
const Home = () => {

const {data: blogs,isPending,error} = useFetch('http://localhost:8000/blogs'); // tworzenie obiektu ktory ma 3 wartośći, bo tyle tez returnow ma useFetch, link do JSON jako parametr  

    return (  
   
    <div className="home">  
    
     {error && <div> {error} </div>} 
     {isPending && <div>Loading...</div>}
     {blogs && <BlogList blogs ={blogs} title ="All blogs!" />}



    </div>
    );
}
 
export default Home;