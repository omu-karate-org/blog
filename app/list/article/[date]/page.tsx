import fsPromises from 'fs/promises';

type paramsType = {
  date: string;
};

export async function generateStaticParams(): Promise<paramsType[]> {
  const data: any = await fsPromises.readFile('./app/data/blog.json');
  const keys = Object.keys(JSON.parse(data));
  const dateArray: Array<any> = [];
  keys.forEach((key) => {
    dateArray.push({ date: key });
  });
  return dateArray;
}

const page = async ({ params }: { params: paramsType }) => {
  const data: any = await fsPromises.readFile('./app/data/blog.json');
  const jsonData = JSON.parse(data);
  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="text-4xl text-center mb-10 mt-10">
        {params.date}
        <br />
        {jsonData[params.date].title}
      </h1>
      <div className="text-lg leading-relaxed text-justify">
        <p className="whitespace-pre-wrap">{jsonData[params.date].description}</p>
      </div>

      {jsonData[params.date].videos.length > 0
        ? jsonData[params.date].videos.map((video: any) => {
            return (
              <div key={video.src}>
                <iframe
                  key={video.src}
                  style={{ width: '100%', aspectRatio: '16/9', border: '0' }}
                  src={'https://www.youtube.com/embed/' + video.src}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="mt-4"
                />
                {video.description}
              </div>
            );
          })
        : ''}
    </div>
  );
};

export default page;
