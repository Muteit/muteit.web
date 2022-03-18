import { NextPage } from "next";

const checklistParuresis: NextPage = () => {
  return (
    <>
      <div className="wrapper">
        <main className="content">
          <div className="container">
            <section className="main">
              <div className="main__block block">
                <div className="block__card img-card">
                  <div className="img-card__content">
                    <p>Чек-лист</p>
                    <p>как не бояться туалета</p>
                    <p>🚽😬🌝💦&#128524;🤗</p>
                  </div>
                </div>
                <h1 className="block__title">Простые действия, которые помогут сходить в туалет комфортно</h1>
                <div className="block__payment payment">
                  <h3 className="payment__title">Получить чек-лист на почту всего за 99₽</h3>
                  <a href="https://muteit.app/checklist-payment" className="payment__button">Получить чек-лист</a>
                </div>
              </div>
            </section>

            <section className="speaches">
              <div className="speaches__block">
                <h2 className="speaches__title">Как помог чек-лист?</h2>

                <div className="speaches__item speach-item alexey">
                  <div className="speach-item__avatar">
                    <picture>
                      <source type="image/webp" srcSet="./img/alexey.webp 1x, ./img/alexey2x.webp 2x" />
                      <img className="speach-item__img" src="./img/alexey.png1x" srcSet="./img/alexey2x.png2x" loading="lazy"
                        width="196" height="274" alt="Фотография Алексея" />
                    </picture>
                  </div>
                  <div className="speach-item__caption">
                    <div className="speach-item__author">Алексей</div>
                    <div className="speach-item__text">Спокойно хожу в туалет в ТЦ</div>
                  </div>
                </div>
                <div className="speaches__item speach-item">
                  <div className="speach-item__avatar speach-item__avatar_reverse">
                    <picture>
                      <source type="image/webp" srcSet="./img/alex.webp 1x, ./img/alex2x.webp 2x" />
                      <img className="speach-item__img" src="./img/alex.png1x" srcSet="./img/alex2x.png2x" loading="lazy"
                        width="196" height="274" alt="Фотография Александра" />
                    </picture>
                  </div>
                  <div className="speach-item__caption speach-item__caption_reverse">
                    <div className="speach-item__author">Александр</div>
                    <div className="speach-item__text speach-item__text_reverse">Меня не пугают перелёты, даже если они больше
                      10
                      часов</div>
                  </div>
                </div>
                <div className="speaches__item speach-item">
                  <div className="speach-item__avatar">
                    <picture>
                      <source type="image/webp" srcSet="./img/olga.webp 1x, ./img/olga2x.webp 2x" />
                      <img className="speach-item__img" src="./img/olga.png1x" srcSet="./img/olga2x.png2x" loading="lazy"
                        width="196" height="274" alt="Фотография Алексея" />
                    </picture>
                  </div>
                  <div className="speach-item__caption">
                    <div className="speach-item__author">Ольга</div>
                    <div className="speach-item__text">Иду в гости и не боюсь пить воду перед выходом</div>
                  </div>
                </div>
              </div>
            </section>

            <section className="benefits">
              <h3 className="benefits__title">В чем прелести чек-листа?</h3>

              <div className="benefits__cards">
                <div className="benefits__card card">
                  <img src="./img/icons/toilet.svg" alt="" className="card__img" />
                  <div className="card__title">Экспертность и личный опыт</div>
                  <p className="card__caption">Это золотой фонд техник из психологии, опробованный на личном опыте команды.</p>
                </div>
                <div className="benefits__card card">
                  <img src="./img/icons/toilet_roll.svg" alt="" className="card__img" />
                  <div className="card__title">Удобство и легкость</div>
                  <p className="card__caption">Все техники просты в применении и не требуют от вас никакого напряжения.</p>
                </div>
                <div className="benefits__card card">
                  <img src="./img/icons/wc.svg" alt="" className="card__img" />
                  <div className="card__title">Мобильность</div>
                  <p className="card__caption">Чек-лист составлен так, что вы можете применять его абсолютно в любой ситуации,
                    когда вам тревожно.</p>
                </div>
              </div>
            </section>
            <section className="bottom">
              <div className="bottom__block">
                <div className="bottom__card img-card">
                  <div className="img-card__content">
                    <p>Чек-лист</p>
                    <p>как не бояться туалета</p>
                    <p>🚽😬🌝💦&#128524;🤗</p>
                  </div>
                </div>
                <div className="bottom__payment payment">
                  <h3 className="payment__title">В чем прелести чек-листа?</h3>
                  <p className="payment__desctiption">Вам больше не придется тратить время, нервы и силы, на то чтобы сходить в
                    туалет. Легко и с радостью вы справитесь с парурезом и будете смеятся от одной мысли о былой тревоге.
                  </p>
                  <a href="https://muteit.app/checklist-payment" className="payment__button">Получить чек-лист</a>
                </div>
                <div className="bottom__payment bottom__payment_second payment">
                  <h3 className="payment__title">В чем прелести чек-листа?</h3>
                  <p className="payment__desctiption">Вам больше не придется тратить время, нервы и силы, на то чтобы сходить в
                    туалет. Легко и с радостью вы справитесь с парурезом и будете смеятся от одной мысли о былой тревоге.
                  </p>
                  <a href="https://muteit.app/checklist-payment" className="payment__button">Получить чек-лист</a>
                </div>
              </div>
            </section>
          </div>
        </main>
        <footer className="footer">
          <div className="container">
            <div className="footer__block">
              <img src="./img/icons/logo.svg" alt="Логотип mute-it.app" className="footer__logo logo" />
              <div className="footer__description">
                Над сайтом работали ребята из Muteit.app, поддерживая их, вы ускоряете
                разработку приложения для помощи при парурезисе
              </div>
              <div className="footer__socials socials">
                <a href="" className="socials__icon"><img src="./img/icons/telegram.svg" alt="" /></a>
                <a href="" className="socials__icon"><img src="./img/icons/instagram.svg" alt="" /></a>
                <a href="" className="socials__icon"><img src="./img/icons/twitter.svg" alt="" /></a>
                <a href="" className="socials__icon"><img src="./img/icons/discord.svg" alt="" /></a>
              </div>
            </div>
          </div>
        </footer>
        <div className="background-top"></div>
        <div className="background-middle"></div>
        <div className="background-bottom"></div>
      </div>
    </>
  );
};

export default checklistParuresis;
