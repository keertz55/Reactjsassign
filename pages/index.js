import Head from 'next/head';
import styles from '../styles/Home.module.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Bookmark from './assets/icons/Bookmark.png'
import Search from './assets/icons/search.png'
import shoppingBag from './assets/icons/shopping-bag.png'
import userAlt from './assets/icons/user-alt.png'
import allBag from './assets/icons/all-bags.png'
import duffelBag from './assets/icons/duffel-bag.png'
import handbag from './assets/icons/handbag.png'
import laptopBag from './assets/icons/laptop-bag.png'
import messageBag from './assets/icons/message-bag.png'
import pouch from './assets/icons/pouch.png'
import slingsBag from './assets/icons/slings-bag.png'
import toteBag from './assets/icons/tote-bag.png'
import Vector4 from './assets/icons/Vector-4.png'
import Ellipse from './assets/icons/Ellipse-35.png'
import cartBag from './assets/icons/card-bag.png'
import Product1 from './assets/productImages/product1.png'
import CartImage from './assets/icons/CartImage.png'

export default function Home() {
  var [productsArray, setproductsArray] = useState([])
  useEffect(() => {
    async function fetchProducts() {
      const response = await axios.get('/api/product');
      let res = response.data;
      if(res && res.success){
        setproductsArray(res.data)
      }else{
        alert("Something went wrong..")
      }
      console.log(productsArray)
    }
    fetchProducts();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.header}>
        <div className={styles.headerLogo}>
          <p> TANN  TRIM </p>
        </div>
        <div className={styles.headermenu}>
          <Image className={styles.image} src={Search} alt="Search" width="18" height="18" />
          <Image className={styles.image} src={userAlt} alt="userAlt" width="18" height="18" />
          <Image className={styles.image} src={Bookmark} alt="Bookmark" width="18" height="18" />
          <Image className={styles.image} src={shoppingBag} alt="shoppingBag" width="18" height="18" />
        </div>
      </div>
      <div className={styles.menu}>
        <p className={styles.menuText}>Bags</p>
        <p className={styles.menuText}>Travel</p>
        <p className={styles.menuText}>Accesories</p>
        <p className={styles.menuText}>Gifting</p>
        <p className={styles.menuText}>Jewelery</p>
      </div>
      <div className={styles.shoppingmenu}>
        <Image className={styles.shoppinglogo} src={allBag} alt="allBag" width="128" height="128" />
        <Image className={styles.shoppinglogo} src={pouch} alt="pouch" width="128" height="128" />
        <Image className={styles.shoppinglogo} src={toteBag} alt="toteBag" width="128" height="128" />
        <Image className={styles.shoppinglogo} src={duffelBag} alt="duffelBag" width="128" height="128" />
        <Image className={styles.shoppinglogo} src={laptopBag} alt="laptopBag" width="128" height="128" />
        <Image className={styles.shoppinglogo} src={messageBag} alt="messageBag" width="128" height="128" />
        <Image className={styles.shoppinglogo} src={slingsBag} alt="slingsBag" width="128" height="128" />
        <Image className={styles.shoppinglogo} src={handbag} alt="handbag" width="128" height="128" />
        <Image className={styles.shoppinglogo} src={pouch} alt="pouch" width="128" height="128" />
      </div>
      <div className={styles.product}>
        <div className={styles.productMenu}>
          <p>Bags</p>
          <Image className={styles.image1} src={Ellipse} alt="Ellipse" width="18" height="18" />
          <p>Backpack</p>
        </div>
        <div className={styles.productMenu}>
          <p>13 Products</p>
          <Image className={styles.image} src={Vector4} alt="Vector4" width="24" height="24" />
        </div>
      </div>
      <div className={styles.row}>
        {productsArray.map(item =>
          <div className={styles.column} key="{value}">
            <div className={styles.card}>
              <Image className={styles.cardimage} src={item.product_image} alt="Product1" width="100" height="80" />
              <Image className={styles.cardbookimage} src={CartImage} alt="Bookmark" width="24" height="24" />
              <p className={styles.cardName}>{item.product_name}</p>
              <div className={styles.cardbase}>
                <div className={styles.cardPrice}>
                  <p className={styles.cardOfferPrice}>${item.product_offer_price}</p>
                  <p className={styles.cardOrginalPrice}>{item.product_orginal_price}</p>
                  <p className={styles.carddiscount}>({item.product_discount}% Off)</p>
                </div>
                <div>
                  <Image className={styles.cartimage} src={cartBag} alt="cartBag" width="100%" height="80%" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>


      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
            background-color: black !important;
            color: #ffffff;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
