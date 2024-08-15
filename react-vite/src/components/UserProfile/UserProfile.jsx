import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { NavLink, useLoaderData } from "react-router-dom"
import WishList from "./WishList"
import "./UserProfile.css"


function UserProfile() {
  const currentUser = useSelector(state => state.session.user)
  const albums = useLoaderData()

  const ownAlbums = albums?.filter(album => album?.user_id === currentUser?.id)
  const latestReleaseYear = Math.max(...ownAlbums?.map(album => album.year));
  const latestAlbum = albums?.find(album => album.year === latestReleaseYear)

  if (!currentUser) return null

  return (
    <div>
      <div id="banner-user-profile"></div>

      <div id="container-user-profile">
        <div id="container-details-user-profile">
          <img src={currentUser.profile_image}
            style={{ width: "220px", aspectRatio: "1/1" }}
            alt="user-profile-image" />


          <div id="container-user-album-details">
            <h1 style={{ marginBottom: "10px" }}>{currentUser.username}</h1>
            {ownAlbums && latestAlbum ? (
              <>
                <span>latest album: {latestAlbum.name}</span>
                <span>released in: {latestAlbum.year}</span>
              </>
            ) : (
              <>
                <span>no albums yet...</span>
              </>
            )}
          </div>
        </div>

        <div style={{ height: "260px" }}></div>

        <div>
          <div id="container-collections-wishlist">
            <span><NavLink>collection</NavLink>&nbsp;&nbsp;&nbsp;100</span>
            <span><NavLink>wishlist</NavLink>&nbsp;&nbsp;&nbsp;{ }</span>
          </div>
          <hr style={{ border: "0.5px solid lightgray" }} />
        </div>
      </div>

      <WishList />

    </div>
  );
}


export default UserProfile
