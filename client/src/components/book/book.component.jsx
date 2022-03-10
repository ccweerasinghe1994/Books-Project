import React from "react";

const Book = ({ author = "", chapters = [] }) => {
  return (
    <div>
      <h3>Book by {author}</h3>
      {chapters.map(({ chapterNumber, chapterContent = [] }) => {
        return (
          <>
            <h4>{chapterNumber}</h4>
            {chapterContent.map((chapter) => {
              const paragraphs = chapter?.paragraph;
              const builtPoints = chapter?.bulletPoints;
              return (
                <>
                  {paragraphs &&
                    paragraphs.map((paragraph) => {
                      return (
                        <>
                          <p>{paragraph}</p>
                        </>
                      );
                    })}

                  <ul>
                    {builtPoints &&
                      builtPoints.map((point) => {
                        return <li>{point}</li>;
                      })}
                  </ul>
                </>
              );
            })}
          </>
        );
      })}
    </div>
  );
};
export default Book;
