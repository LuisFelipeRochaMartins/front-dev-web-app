import { useEffect, useState, useRef } from "react";
import { useReactToPrint } from 'react-to-print';
import { Post } from "../shared/interfaces";

function Feed() {
  const [posts, setPosts] = useState<Post[]>([]);
  const feedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:5000/api/posts");
      const data = await response.json();
      setPosts(data?.data || []);
    }
    fetchData();
  }, []);

  const handlePrint = useReactToPrint({
    content: () => feedRef.current,
  });

  return (
    <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl mb-4 text-center">Feed</h2>
                <button 
        onClick={handlePrint} 
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 block mx-auto mb-4"
      >
        Exportar para PDF
      </button>
      <div ref={feedRef}>
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-4 mb-4 rounded shadow">
            <div className="flex items-center">
              <img 
                src="https://via.placeholder.com/50" 
                alt="User Avatar" 
                className="w-12 h-12 rounded-full mr-4" 
              />
              <h3 className="text-xl font-bold">{post.name}</h3>
            </div>
            <p className="mt-2">{post.descricao}</p>
            <div className="mt-4">
              <img 
                src={post.url} 
                alt="Post Content" 
                className="w-full h-auto rounded-lg" 
              />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Feed;
