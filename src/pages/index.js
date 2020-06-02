import Card from "../components/Card";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <main>
      <div className={styles.cards}>
        <Card
          title="Thinkspace"
          description="CUI"
          image={"/static/work/thinkspace/coverPhoto.jpeg"}
          route="work/thinkspace"
        />
        <Card
          title="Type Studies"
          description="Graphic Design"
          image={"/static/work/type/poster-nf.jpg"}
          route="work/type"
        />
        <Card
          title="Elevation Church"
          description="UX Internship"
          image={"/static/work/elevation/cover_photo.jpg"}
          route="work/elevation"
        />
        <Card
          title="Phipps Interaction"
          description="Mixed Reality"
          image={"/static/work/phipps/phippsCoverGrain.jpg"}
          route="work/phipps"
        />
        <Card
          title="Carnegie Kitchen"
          description="UX Design"
          image={"/static/work/nutritionalLiteracy/01_projectCover.jpg"}
          route="work/nutrition"
        />
      </div>
    </main>
  );
}
