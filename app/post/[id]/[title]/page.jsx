"use client"
import { useState } from "react";
import Head from "next/head";
import Layout from "../../../layout/index"
import SideBar from "../../SideBar";
import {
  Adverts,
  Disclaimer,
  PostTitle,
  Sharers,
  SimpleSharers,
  BottomRecent,
  ArticleTitle,
  CommentDetails, WhatsappChannel,
} from "../../../assets/components";
import { usePostContext } from "../../../assets/context";
import { Tags } from "../../../assets/data";

import AltImage from "../../../assets/images/backup-img.jpg";
import "../../style.css";
import { UseFetch, SocialPreviews } from "../../../assets/custom";
import { Preloader } from "../../../assets/components/loaders";

const PostPage = () => {
  const [imgLoaded, setImgLoaded] = useState(true);
  const { postItem } = usePostContext();
  let title, yoast_head_json, content, categories, id, tags;
  let information = "";
  /*
   * Here right before we get the image, we check if postItem is empty. If it is, we
   * fetch the post and fetch every other post by categories. i.e., fetch all the items
   * in the homepage, so we can proceed.
   * */

  // Always call hooks at the top level
  // get news id from url
  const newsID = window.location.pathname.split("/")[2];
  const url = `${process.env.NEXT_PUBLIC_APP_API_URL}posts/${newsID}`;
  // Fetch current news and store as post ID
  const { loading, data } = UseFetch(url, `post_${newsID}`);

  // Check postItem is not empty by confirming title
  if (Object.keys(postItem).length === 0) {
    if (loading) return <Preloader />;
    else {
      // destructuring needed variables
      ({ title, yoast_head_json, content, categories, id, tags } = data);
      // Usually when you get here using a copied url
    }
  } else {
    // When you are clicking a post from the main page.
    ({ title, yoast_head_json, content, categories, id, tags } = postItem);
  }
  const Image = imgLoaded ? yoast_head_json.og_image[0].url : AltImage;
  const imgCaption = yoast_head_json.schema["@graph"][1].caption;
  information = content.rendered;

  // Set up variables for meta details
  const {
    title: og_title,
    twitter_creator,
    twitter_card,
    og_description,
    og_image,
  } = yoast_head_json;

  const addAdvertToNewsInfo = (html) => {
    // Split the html into an array. separate using the paragraph.
    html = html.split("</p>");
    let count = 1;
    let existingAdvert = sessionStorage.getItem("pacesetter_adverts");
    if (existingAdvert) {
      // Get advert from session Storage
      existingAdvert = JSON.parse(existingAdvert);
      //   Loop through the array and add advert image to the chosen paragraph.
      for (const index in html) {
        // Add advert image after every 2 paragraph if count is less than 5
        if (index % 3 === 0) {
          if (count < 5) {
            let advertImage = `
            <div class="text-center my-4">
              <p>
                <b>
                  <small>Advertisement</small>
                </b>
              </p>
              <img
                src=${existingAdvert[count].image_file}
                alt="Advert ${count}"
                class="img-thumbnail rounded advert-img-max-height"
              />
        </div>
    `;
            html[index] = html[index] + advertImage;
            // increment counter.
            count++;
          }
        }
      }
    }
    //   Join the modified html array into a string and return
    html = html.join("");
    // Use regular expressions to replace width and remove height
    html = html
      .replace(/width="\d+"/g, 'width="100%"')
      .replace(/height="\d+"/g, "");
    html = html.replace("<figure");

    return html;
  };

  try {
    information = addAdvertToNewsInfo(information);
  } catch (e) {
    console.error("Error joining advert images to post.", e);
    information = content.rendered;
  }

  return (
    <Layout>
      <Head>
        <title>{og_title}</title>
        <meta name="description" content={og_description} />
        <meta property="og:title" content={og_title} />
        <meta property="og:description" content={og_description} />
        <meta property="og:image" content={og_image[0].url} />
        <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content={twitter_card} />
        <meta name="twitter:creator" content={twitter_creator} />
        <meta name="twitter:title" content={og_title} />
        <meta name="twitter:description" content={og_description} />
        <meta name="twitter:image" content={og_image[0].url} />
      </Head>
      <SocialPreviews
        name={twitter_creator}
        type={twitter_card}
        title={og_title}
        description={og_description}
        image={og_image[0].url}
      />
      <div className="post-container my-5">
        <div className="row">
          <div className="col-md-9">
            <Adverts index={0} />
            <div className="row">
              <div className="col-md-1 sharers">
                <Sharers title={yoast_head_json.title} />
              </div>
              <div className="col-md-11 post-head">
                <div className="post-image-holder text-center">
                  <img src={Image} alt="Post title" className="shadow rounded" />
                  <img
                      src={Image}
                      alt="Backup Pic"
                      style={{ display: "none" }}
                      onError={() => setImgLoaded(false)}
                  />
                </div>
                <p className="fw-bold mx-auto mt-2 text-muted">
                  <small>{imgCaption}</small>
                </p>
              </div>
            </div>
            <div className="row my-1 align-items-start">
              <div className="col-md-12 px-0">
                <PostTitle
                  title={title.rendered}
                  details={yoast_head_json}
                  categories={categories}
                />
                <div
                  dangerouslySetInnerHTML={{ __html: information }}
                  className="news-holder pe-md-3"
                />
                <SimpleSharers title={yoast_head_json.title} />
                <WhatsappChannel />
                <Disclaimer category={categories} />
                {/* Comments */}
                <CommentDetails post_id={id} />
                <Adverts index={5} />
                {tags.length > 0 && (
                  <div className="mb-3">
                    <span className="badge rounded-pill bg-dark">Tags</span>
                    {tags.map((tag, index) => (
                      <small
                        key={index}
                        className="badge rounded-pill bg-light ms-2 text-muted"
                      >
                        {Tags[tag]}
                      </small>
                    ))}
                  </div>
                )}
                <div className="mb-5">
                  <ArticleTitle title="related posts" width={30} />
                </div>
                <BottomRecent categories={categories} />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <SideBar />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostPage;