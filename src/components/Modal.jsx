import React from 'react';
import { saveAs } from "file-saver";

const Modal = ({ isOpen, onClose, content, onPrev, onNext }) => {
  if (!isOpen) return null;

  const { image, author, description, date, downloadLink } = content || {};

  const handleDownload = (imageUrl) => {
    if (!imageUrl) {
      alert("Изображение недоступно для загрузки.");
      return;
    }

    saveAs(imageUrl, 'downloaded-image.jpg');
  };
  

  return (
    <dialog className="modal modal-open">
      <div className="modal-box w-full max-w-5xl h-[90vh] overflow-y-auto p-0">
        <div className="grid grid-cols-[auto_1fr_auto] h-full">
          {/* Левая стрелка */}
          <div
            className="flex items-center justify-center pl-2"
            onClick={onPrev}
          >
            <button className=" text-white text-3xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 z-50">
            &larr;
            </button>
        
          </div>

          {/* Основной контент */}
          <div className="grid grid-cols-3 h-full">
            {/* Информация об авторе */}
            <div className="col-span-1 bg-white p-2 flex flex-col justify-between">
              <div>
                {/* Автор */}
                <div className="flex items-center mb-4">
                  <img
                    src="https://via.placeholder.com/40"
                    alt={author || "Автор"}
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-bold">{author || "Неизвестный автор"}</h3>
                    <p className="text-sm text-gray-600">
                      Дата публикации: {date ? new Date(date).toLocaleDateString() : "Не указана"}
                    </p>
                  </div>
                </div>

                {/* Описание */}
                {description && <p className="text-gray-700 mb-6">{description}</p>}
              </div>

              {/* Кнопки действий */}
              <div className="flex gap-2">
                <button
                  href={downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white bg-opacity-80 text-gray-700 rounded-lg border hover:bg-opacity-100 transition duration-200"
                  onClick={() => handleDownload(image)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-download"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                  </svg>
                  <span>Download</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white bg-opacity-80 text-gray-700 rounded-lg border hover:bg-opacity-100 transition duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16">
                    <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5"/>
                  </svg>
                  Share
                </button>
              </div>
            </div>

            {/* Изображение */}
            <div className="col-span-2 flex items-center justify-center bg-white">
              {image ? (
                <img
                  src={image}
                  alt="Selected content"
                  className="max-h-full max-w-full object-contain"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">Изображение отсутствует</p>
                </div>
              )}
            </div>
          </div>

          {/* Правая стрелка */}
          <button
            className="flex items-center justify-center pr-2"
            onClick={onNext}
          >
            <button className="text-white text-3xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 z-50">
              &rarr;
            </button>
            
          </button>
        </div>

        {/* Закрытие */}
        <div className="absolute top-4 right-4 space-x-2">
          <button className="p-2 rounded-sm bg-white hover:bg-gray-200 border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-heart-fill text-gray-700"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
              />
            </svg>
          </button>
          <button className="p-2 rounded-sm bg-white hover:bg-gray-200 border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus-lg text-gray-700"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
              />
            </svg>
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop" onClick={onClose}>
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Modal;
