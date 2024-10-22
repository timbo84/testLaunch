'use client'

import { useEffect, useState } from "react";
import { supabase } from "../api/db";
import { useRouter } from "next/navigation";
import styles from "./gallery.module.css";
import  NavBar from "../components/nav";

const DisplayImages = () => {
  const [file, setFile] = useState(null);
  const [images, setImages] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchImages = async () => {
      const { data, error } = await supabase.storage.from("photo").list();

      if (error) {
        console.error("Error fetching images:", error);
      } else {
        setImages(data);
      }
    };

    fetchImages();
  }, []);

  const deleteImage = async (imageName) => {
    const { error } = await supabase.storage.from("photo").remove([imageName]);

    if (error) {
      console.error("Error deleting image:", error);
    } else {
      window.location.reload();
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) return;

    const fileName = `${Date.now()}-${file.name}`;
    const { data, error } = await supabase.storage
      .from("photo")
      .upload(fileName, file, {
        upsert: true,
      });

    if (error) {
      console.error("Error uploading file:", error);
    } else {
      alert("File uploaded successfully!");
      console.log("File uploaded successfully:", data);
      window.location.reload();
    }
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const navigateToHomePage = () => {
    router.push("/");
  };

  return (

    <>
    < NavBar />
      <div className={styles.banner}>
        {/* <img
          src="images/flower.png"
          alt="Left Flower"
          className={styles.leftFlower}
        />
        <img
          src="images/flower.png"
          alt="Right Flower"
          className={styles.rightFlower}
        />
        <img
          src="images/pearls.png"
          alt="Left Pearl"
          className={styles.leftPearl}
        />
        <img
          src="images/pearls.png"
          alt="Right Pearl"
          className={styles.rightPearl}
        /> */}
        <h1>Our Gallery</h1>
        <ul className={styles.breadcrumb}>
          <li>Home</li>
          <li>Gallery</li>
        </ul>
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>
          Welcome to Delta Sigma Theta Sorority Inc<br /> Lawton, OK Chapter
          </h1>
          <p>
            For decades, the Gamma Lambda Chapter of Alpha Kappa Alpha, Inc has
            forwarded sisterhood, promoted academic excellence, and served our
            community. Join us in celebrating our rich history and continuing
            our legacy of empowerment and service.
          </p>
        </div>
        <div className={styles.image}>
          <img key="" src="./images/hero.png" alt="image of the sisterhood" />
        </div>
      </div>
      <div className={styles.centeredContent}>
        <h1>Lawton Chapter Gallery</h1>
        <p>A history of service and sisterhood.</p>
        <button onClick={toggleFormVisibility}>
          {isFormVisible ? "Close Form" : "Submit Your Photos"}
        </button>
        {isFormVisible && (
          <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileChange} />
            <button type="submit">Upload</button>
            <br />
          </form>
        )}
      </div>

      <div className={styles.gallery}>
        {images.map((image) => (
          <div key={image.name} className={styles.galleryItem}>
            <a href={`/gallery/${image.name}`}>
              <img
                src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/photo/${image.name}`}
                alt={image.name}
              />
            </a>
            <button onClick={() => deleteImage(image.name)}>Delete</button>
          </div>
        ))}
      </div>
      <div className={styles.bottomContent}>
        
        <h1>Join Our Sisterhood</h1>
        <p>
          Join a community of strong, supportive women dedicated in making a
          difference.
        </p>
        <button onClick="">Join Us</button>
        {/* <img
          src="images/flower.png"
          alt="Left Flower"
          className={styles.leftFlower1}
        />
        <img
          src="images/flower.png"
          alt="Right Flower"
          className={styles.rightFlower1}
        />
        <img
          src="images/pearls.png"
          alt="Left Pearl"
          className={styles.leftPearl1}
        />
        <img
          src="images/pearls.png"
          alt="Right Pearl"
          className={styles.rightPearl1}
        /> */}
      </div>
    </>
  );
};

export default DisplayImages;
