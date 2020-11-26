import React from "react"

export function Header() {
  return (
    <header style={{ height: 700, overflow: "hidden" }}>
      <video
        id="video1"
        preload="true"
        autoPlay
        muted
        playsInline
        loop
        className="d-none d-md-block"
        style={{
          background: "white",
          filter: "grayscale(30%)",
          height: "auto",
          width: "100%",
        }}
      >
        <source src="/home-background.mp4" type="video/mp4" />
      </video>
      <div
        className="d-md-none"
        style={{
          height: "100%",
          backgroundImage: `url(/img/home-demo-background.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      />
      <div style={{ position: "absolute", top: 150, width: "100%" }}>
        <div className="container h-100">
          <div className="row h-100">
            <div
              className="col-lg-8 my-auto"
              style={{
                background: "rgb(66,66,66,0.5)",
                borderRadius: 10,
                padding: "2em",
              }}
            >
              <div style={{ color: "white" }}>
                <h1 className="mb-5">
                  <b>Stop à l'addiction à l'alcool</b>
                </h1>
                <h3>
                  <p>
                    5 millions de personnes en France sont dépendantes à
                    l'alcool mais seulement 5% d'entre elle est prise en charge
                    par un professionnel de santé.
                  </p>
                  <p>
                    Aujourd'hui, l'alcool tue plus de 50 000 personnes chaque
                    année.
                  </p>
                  <p>Agissons ensemble contre l'addiction à l'alcool.</p>
                </h3>
                <br />
                <br />
                <div>
                  <a
                    href="https://apps.apple.com/us/app/mon-suivi-psy/id1540061393"
                    target="noopener noreferrer"
                  >
                    <img width={200} src="/img/app-store-badge.svg" alt="" />
                  </a>
                  &nbsp;&nbsp;
                  <a
                    href="https://play.google.com/store/apps/details?id=com.addicto&hl=fr&gl=US"
                    target="noopener noreferrer"
                  >
                    <img width={200} src="/img/google-play-badge.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 my-auto d-none d-lg-block">
              <img
                src="/img/demo-screen-1.png"
                className="img-fluid"
                alt=""
                width={300}
                height={580}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
