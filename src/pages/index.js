import Card from "../components/Card";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <main>
      <div className={styles.cards}>
        {/* <Card
          title="Apple"
          description="Design Internship"
          video="/static/work/apple/coverVideo.mp4"
          videoThumb="/static/work/thinkspace/coverVideoThumbnail.jpeg"
          image={"/static/work/apple/cover_logo.jpg"}
          isImage={true}
          route="work/thinkspace"
        /> */}
        <Card
          title="Thinkspace"
          description="CUI"
          video="/static/work/thinkspace/coverVideo.mp4"
          videoThumb="/static/work/thinkspace/coverVideoThumbnail.jpeg"
          isImage={false}
          image={"/static/work/thinkspace/coverPhoto.jpeg"}
          route="work/thinkspace"
        />

        <Card
          title="Covaid"
          description="Product Design"
          image="/static/work/covaid/coverPhoto.png"
          route="work/covaid"
          isImage
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
          title="Type Studies"
          description="Graphic Design"
          // image="/static/work/type/poster-nf.jpg"
          video="/static/work/type/coverVideo.mp4"
          videoThumb="/static/work/type/coverVideoThumbnail.jpeg"
          route="work/type"
          isImage={false}
        />
        <Card
          title="Phipps Interaction"
          description="XR"
          // image="/static/work/phipps/phippsCoverGrain.jpg"
          video="/static/work/phipps/coverVideo.mp4"
          videoThumb="/static/work/phipps/coverVideoThumbnail.jpeg"
          route="work/phipps"
          isImage={false}
        />
      </div>
    </main>
  );
}
