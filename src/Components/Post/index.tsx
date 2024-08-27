import { Post } from "../../shared/interfaces"

function Posts({id, name, descricao, url}: Post) {
  return (
    <div
      key={id}
      className="bg-white shadow-md rounded-lg mb-6 mx-auto w-full sm:w-10/12 md:w-8/12 lg:w-7/12 xl:w-6/12"
    >
      <div className="p-4">
        <div className="flex items-center space-x-4">
          <img
            className="w-10 h-10 rounded-full"
            alt={name}
          />
          <div>
          </div>
        </div>
        <div className="mt-3">
          <p className="text-gray-800">{descricao}</p>
        </div>
      </div>
      <div className="relative">
        <img
          className="w-full h-64 object-cover"
          src={url}
          alt="Post Content"
        />
        <div className="absolute inset-0 bg-black opacity-50 flex justify-center items-center">
          <button className="bg-white p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132a.75.75 0 00-1.155.651v4.526a.75.75 0 001.155.651l3.197-2.132a.75.75 0 000-1.3z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="p-4 border-t">
        <button className="text-blue-500">Mostrar mais</button>
      </div>
    </div>
  )
}

export default Posts