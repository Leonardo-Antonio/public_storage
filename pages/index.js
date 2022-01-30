import { ImagesCard } from "../components/ImagesCard";
import { ContainerLayout } from "../layouts/ContainerLayout";
import { imageService } from "../services/image.service";

export default function Home({ images }) {
  const { data, error } = images;
  return (
    <ContainerLayout>
      <div>
        <div>
          {error ? <span>ERROR</span> : <ImagesCard images={data.data} />}
        </div>
      </div>
    </ContainerLayout>
  );
}

export const getServerSideProps = async () => {
  const { data, error } = await imageService.getAll();
  return {
    props: {
      images: {
        data,
        error,
      },
    },
  };
};
