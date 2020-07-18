import Card from "../components/Card";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <main>
      <div className={styles.cards}>
        <Card
          title="Thinkspace"
          description="CUI"
          // image="/static/work/thinkspace/coverVideo.mp4"
          isImage
          image={"/static/work/thinkspace/coverPhoto.jpeg"}
          route="work/thinkspace"
        />
        <Card
          title="Type Studies"
          description="Graphic Design"
          // image="/static/work/type/poster-nf.jpg"
          video="/static/work/type/coverVideo.mp4"
          videoThumb="/static/work/type/coverVideoThumbnail.jpeg"
          route="work/type"
          isImage={false}
        />
        <Card
          title="Elevation Church"
          description="UX Internship"
          // image="/static/work/elevation/cover_photo.jpg"
          video="/static/work/elevation/coverVideo.mp4"
          videoThumb="/static/work/elevation/coverVideoThumbnail.jpeg"
          route="work/elevation"
          isImage={false}
        />
        <Card
          title="Phipps Interaction"
          description="Mixed Reality"
          // image="/static/work/phipps/phippsCoverGrain.jpg"
          video="/static/work/phipps/coverVideo.mp4"
          videoThumb="/static/work/phipps/coverVideoThumbnail.jpeg"
          route="work/phipps"
          isImage={false}
        />

        <Card
          title="Carnegie Kitchen"
          description="UX Design"
          image="/static/work/nutritionalLiteracy/01_projectCover.jpg"
          route="work/nutrition"
          isImage
        />
      </div>
    </main>
  );
}
