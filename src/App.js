import { Link } from "react-router-dom";
import "./App.css";
import Gerb from "./assets/Герб.png";
import Eugen from "./assets/Женя-новая.png";
import { useEffect, useState } from "react";

function App() {
  const [clickCount, setClickCount] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  function handleClick() {
    setClickCount(clickCount + 1);
    if (clickCount >= 10) {
      alert("Ебать я кто?");
      setClickCount(0);
    }
  }

  return (
    <>
      <div className="header">
        <img src={Gerb} onClick={handleClick} />
        <p className="header__text">
          Первое высшее техническое учебное заведение в России <br />
          САНКТ-ПЕТЕРБУРГСКИЙ ГОРНЫЙ УНИВЕРСИТЕТ <br />
          Основан в 1773 году
        </p>
      </div>
      <div className="select">
        <p className="select__title">ВЫБОРЫ ПРЕДСЕДАТЕЛЕЙ 2023/24</p>
        <div className="select__buttons">
          <button className="select__button">
            <Link to={"Faculties"}>
              <a className="select__button__link">факультетов</a>
            </Link>
          </button>

          <button className="select__button">
            <Link to={"Clubs"}>
              <a className="select__button__link">клубов</a>
            </Link>
          </button>
          <button className="select__button">
            <Link to={"OOO"}>
              <a className="select__button__link">ООО</a>
            </Link>
          </button>
        </div>
      </div>
      <div className="dates">
        <p className="dates__title">Даты проведения выборов</p>
        <table className="dates__table">
          <tr className="dates__table__header">
            <th>10.04</th>
            <th>11.04</th>
            <th>12.04</th>
            <th>13.04</th>
            <th>14.04</th>
            <th>15.04</th>
            <th>16.04</th>
          </tr>
          <tr className="dates__table__line">
            <td>СФ</td>
            <td>ГФ</td>
            <td>ФПМС</td>
            <td>ЭФ</td>
            <td>НГФ</td>
            <td className="dates__table__line__wd"></td>
            <td className="dates__table__line__wd"></td>
          </tr>
          <tr className="dates__table__line">
            <td>ГРФ</td>
            <td></td>
            <td>ФФиГД</td>
            <td></td>
            <td>ЭНФ</td>
            <td className="dates__table__line__wd"></td>
            <td className="dates__table__line__wd"></td>
          </tr>
          <tr className="dates__table__line">
            <td>ММФ</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="dates__table__line__wd"></td>
            <td className="dates__table__line__wd"></td>
          </tr>
        </table>
        <table className="dates__table__second">
          <tr className="dates__table__header">
            <th>17.04</th>
            <th>18.04</th>
            <th>19.04</th>
            <th>20.04</th>
            <th>21.04</th>
            <th>22.04</th>
            <th>23.04</th>
          </tr>
          <tr className="dates__table__line">
            <td>Внешние связи</td>
            <td>НО "Эколог"</td>
            <td>ИЦ "Медиа Горный"</td>
            <td>"17-73"</td>
            <td>Качество образования</td>
            <td className="dates__table__line__wd"></td>
            <td className="dates__table__line__wd"></td>
          </tr>
          <tr className="dates__table__line">
            <td>Волонтерский штаб</td>
            <td></td>
            <td></td>
            <td>Геологический инжиниринг</td>
            <td>Клуб психологических игр</td>
            <td className="dates__table__line__wd"></td>
            <td className="dates__table__line__wd"></td>
          </tr>
          <tr className="dates__table__line">
            <td>Архитектурный клуб</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="dates__table__line__wd"></td>
            <td className="dates__table__line__wd"></td>
          </tr>
        </table>
        <table className="dates__table__second">
          <tr className="dates__table__header">
            <th>24.04</th>
            <th>25.04</th>
            <th>26.04</th>
            <th>27.04</th>
            <th>28.04</th>
            <th>29.04</th>
            <th>30.04</th>
          </tr>
          <tr className="dates__table__line">
            <td>Студенческий тренинг-центр</td>
            <td>Нефтегазовый инжиниринг</td>
            <td>Дебаты в Горном</td>
            <td>Mining English Speaking Club</td>
            <td>Академисты</td>
            <td className="dates__table__line__wd"></td>
            <td className="dates__table__line__wd"></td>
          </tr>
          <tr className="dates__table__line">
            <td>Творческий клуб</td>
            <td></td>
            <td></td>
            <td></td>
            <td>Mining Gardening</td>
            <td className="dates__table__line__wd"></td>
            <td className="dates__table__line__wd"></td>
          </tr>
          <tr className="dates__table__line">
            <td>Спортивные клубы</td>
            <td></td>
            <td></td>
            <td></td>
            <td>Настольных игры</td>
            <td className="dates__table__line__wd"></td>
            <td className="dates__table__line__wd"></td>
          </tr>
        </table>
      </div>
      <div className="documents">
        <p className="documents__title">ДОКУМЕНТЫ</p>
        <div className="documents__btns">
          <button className="documents__btn">
            <a
              href="https://drive.google.com/file/d/16C9h-KzsStIeBwq6A0n7zGeJe7lC4Cs-/view"
              target="_blank"
              rel="noreferrer"
            >
              Положение
            </a>
          </button>
          <button className="documents__btn">
            <a
              href="https://drive.google.com/file/d/1n0CXf4vewjlzJrDyZRVIbUTlKN5KwGG-/view"
              target="_blank"
              rel="noreferrer"
            >
              Регламент
            </a>
          </button>
          <button className="documents__btn">
            <a
              href="https://docs.google.com/spreadsheets/d/1fjxbMk6aRRsU_3uQtopYoBezhCWlyWkCQOUQOOKBCQ4/edit#gid=0"
              target="_blank"
              rel="noreferrer"
            >
              Протоколы <br />
              выборов
            </a>
          </button>
        </div>
      </div>
      <div className="questions">
        <p className="questions__title">ОСТАЛИСЬ ВОПРОСЫ?</p>
        <div className="questions__container">
          <div className="questions__container__text">
            <p>По всем вопросам, пожеланиям и предложениям можно написать</p>
            <button>
              <a
                href="https://vk.com/cptngrimsby"
                target="_blank"
                rel="noreferrer"
              >
                Жильцову Евгению
              </a>
            </button>
          </div>
          <img
            className="questions__container__image"
            src={Eugen}
            alt="Жильцов Евгений"
          />
        </div>
      </div>

      <div className="footer">
        <p className="footer__title">НАШИ КОНТАКТЫ</p>
        <div className="footer__social">
          <a href="http://students.spmi.ru" target="_blank" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="50px"
              height="50px"
            >
              <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 32.987976 4 39.925645 8.44503 43.476562 15 L 25 15 A 1.0001 1.0001 0 0 0 24.886719 15.005859 C 19.738868 15.064094 15.511666 19.035373 15.046875 24.078125 L 8.0351562 12.650391 C 11.851593 7.4136918 18.014806 4 25 4 z M 6.8242188 14.501953 L 16.476562 30.230469 A 1.0001 1.0001 0 0 0 16.591797 30.388672 A 1.0001 1.0001 0 0 0 16.59375 30.392578 C 18.3752 33.158533 21.474925 35 25 35 C 26.413063 35 27.756327 34.701734 28.976562 34.169922 L 22.320312 45.824219 C 11.979967 44.509804 4 35.701108 4 25 C 4 21.169738 5.0375742 17.591533 6.8242188 14.501953 z M 25 17 C 29.430123 17 33 20.569877 33 25 C 33 26.42117 32.629678 27.751591 31.984375 28.90625 A 1.0001 1.0001 0 0 0 31.982422 28.908203 A 1.0001 1.0001 0 0 0 31.947266 28.966797 C 30.57172 31.37734 27.983486 33 25 33 C 20.569877 33 17 29.430123 17 25 C 17 20.569877 20.569877 17 25 17 z M 30.972656 17 L 44.421875 17 C 45.43679 19.465341 46 22.165771 46 25 C 46 36.609824 36.609824 46 25 46 C 24.842174 46 24.686285 45.991734 24.529297 45.988281 L 33.683594 29.958984 A 1.0001 1.0001 0 0 0 33.742188 29.841797 C 34.541266 28.405674 35 26.755664 35 25 C 35 21.728612 33.411062 18.825934 30.972656 17 z" />
            </svg>
          </a>
          <a href=" https://t.me/spmutoday" target="_blank" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="50px"
              height="50px"
            >
              <path d="M 25.154297 3.984375 C 24.829241 3.998716 24.526384 4.0933979 24.259766 4.2011719 C 24.010014 4.3016357 23.055766 4.7109106 21.552734 5.3554688 C 20.048394 6.0005882 18.056479 6.855779 15.931641 7.7695312 C 11.681964 9.5970359 6.9042108 11.654169 4.4570312 12.707031 C 4.3650097 12.746607 4.0439208 12.849183 3.703125 13.115234 C 3.3623292 13.381286 3 13.932585 3 14.546875 C 3 15.042215 3.2360676 15.534319 3.5332031 15.828125 C 3.8303386 16.121931 4.144747 16.267067 4.4140625 16.376953 C 5.3912284 16.775666 8.4218473 18.015862 8.9941406 18.25 C 9.195546 18.866983 10.29249 22.222526 10.546875 23.044922 C 10.714568 23.587626 10.874198 23.927519 11.082031 24.197266 C 11.185948 24.332139 11.306743 24.45034 11.453125 24.542969 C 11.511635 24.579989 11.575789 24.608506 11.640625 24.634766 L 11.644531 24.636719 C 11.659471 24.642719 11.67235 24.652903 11.6875 24.658203 C 11.716082 24.668202 11.735202 24.669403 11.773438 24.677734 C 11.925762 24.726927 12.079549 24.757812 12.216797 24.757812 C 12.80196 24.757814 13.160156 24.435547 13.160156 24.435547 L 13.181641 24.419922 L 16.191406 21.816406 L 19.841797 25.269531 C 19.893193 25.342209 20.372542 26 21.429688 26 C 22.057386 26 22.555319 25.685026 22.875 25.349609 C 23.194681 25.014192 23.393848 24.661807 23.478516 24.21875 L 23.478516 24.216797 C 23.557706 23.798129 26.921875 6.5273437 26.921875 6.5273438 L 26.916016 6.5507812 C 27.014496 6.1012683 27.040303 5.6826405 26.931641 5.2695312 C 26.822973 4.8564222 26.536648 4.4608905 26.181641 4.2480469 C 25.826669 4.0352506 25.479353 3.9700339 25.154297 3.984375 z M 24.966797 6.0742188 C 24.961997 6.1034038 24.970391 6.0887279 24.962891 6.1230469 L 24.960938 6.1347656 L 24.958984 6.1464844 C 24.958984 6.1464844 21.636486 23.196371 21.513672 23.845703 C 21.522658 23.796665 21.481573 23.894167 21.439453 23.953125 C 21.379901 23.91208 21.257812 23.859375 21.257812 23.859375 L 21.238281 23.837891 L 16.251953 19.121094 L 12.726562 22.167969 L 13.775391 17.96875 C 13.775391 17.96875 20.331562 11.182109 20.726562 10.787109 C 21.044563 10.471109 21.111328 10.360953 21.111328 10.251953 C 21.111328 10.105953 21.035234 10 20.865234 10 C 20.712234 10 20.506484 10.14875 20.396484 10.21875 C 18.963383 11.132295 12.671823 14.799141 9.8515625 16.439453 C 9.4033769 16.256034 6.2896636 14.981472 5.234375 14.550781 C 5.242365 14.547281 5.2397349 14.548522 5.2480469 14.544922 C 7.6958673 13.491784 12.47163 11.434667 16.720703 9.6074219 C 18.84524 8.6937992 20.838669 7.8379587 22.341797 7.1933594 C 23.821781 6.5586849 24.850125 6.1218894 24.966797 6.0742188 z" />
            </svg>
          </a>
          <a href="https://vk.com/miningstud" target="_blank" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="50px"
              height="50px"
            >
              <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 15.001953 18 L 10.966797 18.001953 C 10.966797 18.001953 10.735897 17.988941 10.457031 18.025391 C 10.178165 18.061841 9.7661948 18.078761 9.34375 18.556641 L 9.3417969 18.558594 L 9.3398438 18.560547 C 8.9640794 18.990267 8.9784173 19.490413 9.0253906 19.765625 C 9.0721906 20.039824 9.1769621 20.244579 9.1777344 20.246094 L 9.1777344 20.248047 C 9.2165294 20.343227 12.146379 27.521928 15.839844 31.378906 C 18.445099 34.101283 21.231404 35 23.712891 35 L 25 35 C 25.42346 35 25.801654 34.98073 26.220703 34.763672 C 26.639753 34.546613 27 33.94757 27 33.482422 C 27 32.981247 27.012312 32.495404 27.076172 32.224609 C 27.135819 31.971721 27.112802 32.033791 27.136719 32.033203 C 27.160692 32.038405 27.204328 32.048513 27.287109 32.085938 C 27.465502 32.166587 27.741146 32.346633 28.046875 32.583984 C 28.657377 33.057945 29.380504 33.745554 30.191406 34.277344 C 31.352856 35.04712 32.613281 35 32.613281 35 L 36.769531 35 L 36.814453 34.996094 C 36.814453 34.996094 37.452209 34.981594 38.107422 34.580078 C 38.435028 34.379319 38.82436 34.011034 38.955078 33.458984 C 39.085796 32.906935 38.918888 32.327748 38.597656 31.818359 C 38.480305 31.631523 37.910631 30.80588 35.636719 28.787109 C 35.049256 28.26609 34.648638 27.897278 34.490234 27.701172 C 34.433996 27.631548 34.42928 27.638269 34.417969 27.634766 C 34.431219 27.600573 34.5626 27.32391 34.914062 26.867188 C 35.280366 26.391181 35.836997 25.727944 36.552734 24.816406 C 37.464977 23.654213 38.105035 22.536703 38.507812 21.59375 C 38.709203 21.122274 38.851959 20.694455 38.9375 20.306641 C 39.02304 19.918826 39.091299 19.59647 38.964844 19.136719 C 38.870524 18.794484 38.614371 18.487968 38.363281 18.326172 C 38.112191 18.164376 37.878094 18.103431 37.667969 18.064453 C 37.247723 17.986493 36.876935 18 36.53125 18 C 35.80744 18 32.589808 18.025391 32.324219 18.025391 C 32.012508 18.025391 31.515256 18.155199 31.285156 18.287109 C 30.713891 18.614265 30.535156 19.0625 30.535156 19.0625 L 30.480469 19.158203 L 30.449219 19.265625 C 30.449219 19.265625 29.716532 21.635827 28.962891 22.857422 L 28.960938 22.857422 C 28.074746 24.296534 27.41371 24.867373 27.123047 25.029297 C 27.092172 25.046497 27.109277 25.03736 27.087891 25.048828 C 27.065156 24.982615 27.036471 24.891447 27.017578 24.722656 C 26.975067 24.342427 27 23.806967 27 23.289062 C 27 21.854646 27.107725 20.960184 26.988281 20.113281 C 26.928559 19.68983 26.776516 19.21826 26.429688 18.855469 C 26.082858 18.492678 25.634863 18.3141 25.1875 18.210938 L 25.185547 18.210938 C 24.719313 18.10357 24.216872 18.011359 23.009766 18 C 21.471766 17.98566 20.470116 18.03334 19.580078 18.429688 L 19.570312 18.435547 L 19.5625 18.439453 C 19.210828 18.604643 18.933601 18.793991 18.689453 19.046875 C 18.567379 19.173317 18.422556 19.265395 18.322266 19.667969 C 18.272116 19.869256 18.266616 20.250091 18.494141 20.558594 C 18.721663 20.867097 19.040516 20.960144 19.228516 20.984375 C 19.193836 20.979875 19.376419 21.020055 19.517578 21.089844 C 19.658738 21.159634 19.781301 21.26012 19.8125 21.300781 L 19.8125 21.302734 C 19.79945 21.285784 19.935003 21.622642 19.970703 21.929688 C 20.006403 22.236732 20 22.484375 20 22.484375 L 19.998047 22.544922 L 20.003906 22.605469 C 20.003906 22.605469 20.065293 23.284928 20.033203 23.986328 C 20.017153 24.337028 19.972824 24.690015 19.914062 24.90625 C 19.910955 24.917687 19.909535 24.913678 19.90625 24.923828 C 19.655877 24.748968 19.078554 24.13969 18.283203 22.826172 C 17.547974 21.611109 16.859375 19.425781 16.859375 19.425781 L 16.84375 19.376953 L 16.826172 19.330078 C 16.826172 19.330078 16.697788 18.841896 16.130859 18.443359 C 15.59948 18.069284 15.09375 18.017578 15.09375 18.017578 L 15.001953 18 z M 14.769531 20 C 14.826731 20.02091 14.946311 20.063999 14.96875 20.074219 L 14.945312 20.003906 C 14.945312 20.003906 14.976103 20.074602 14.976562 20.076172 C 14.976816 20.076308 14.980369 20.078025 14.980469 20.078125 L 14.980469 20.080078 L 14.982422 20.080078 C 14.932162 20.044918 14.974769 20.079819 14.980469 20.087891 C 15.008089 20.182121 15.618693 22.285424 16.572266 23.861328 C 17.440943 25.295947 18.08272 26.099662 18.783203 26.580078 C 19.483009 27.060029 20.424029 27.010564 20.902344 26.761719 C 21.541579 26.429749 21.720259 25.88414 21.84375 25.429688 C 21.967241 24.975234 22.011297 24.514175 22.03125 24.078125 C 22.06932 23.246137 22.004207 22.565534 21.998047 22.498047 C 21.999047 22.460457 22.007951 22.135402 21.957031 21.697266 C 21.905701 21.255789 21.813696 20.707151 21.421875 20.15625 C 21.860763 20.09104 22.104431 19.991744 22.990234 20 C 24.119875 20.01063 24.291711 20.05776 24.736328 20.160156 C 24.978465 20.215996 25.005345 20.262255 24.982422 20.238281 C 24.959502 20.214301 24.980423 20.198281 25.007812 20.392578 C 25.062629 20.781082 25 21.777479 25 23.289062 C 25 23.715159 24.958857 24.316046 25.029297 24.945312 C 25.099687 25.574186 25.296238 26.378841 26.056641 26.849609 C 26.489901 27.117751 27.317569 27.209968 28.097656 26.775391 C 28.877743 26.340815 29.678254 25.507138 30.664062 23.90625 C 31.637852 22.327814 32.220192 20.252559 32.283203 20.033203 C 32.283203 20.033203 32.294311 20.025979 32.300781 20.021484 C 32.318451 20.022334 32.29597 20.025391 32.324219 20.025391 C 32.69463 20.025391 35.85506 20 36.53125 20 C 36.717284 20 36.798956 20.010015 36.9375 20.015625 C 36.88151 20.23153 36.806235 20.482942 36.667969 20.806641 C 36.342997 21.567438 35.785273 22.554225 34.978516 23.582031 C 34.283253 24.467494 33.743119 25.109741 33.330078 25.646484 C 32.917037 26.183228 32.592563 26.606593 32.457031 27.21875 C 32.3215 27.830907 32.580091 28.521341 32.933594 28.958984 C 33.287097 29.396628 33.724557 29.765223 34.308594 30.283203 C 36.508681 32.236432 36.869649 32.827649 36.904297 32.882812 L 36.904297 32.884766 C 36.941447 32.943676 36.917361 32.88443 36.931641 32.914062 C 36.806889 32.952953 36.658409 32.99693 36.644531 33 L 32.597656 33 L 32.591797 33 C 32.591797 33 31.847477 32.9756 31.294922 32.609375 L 31.292969 32.607422 L 31.291016 32.607422 C 30.706463 32.224555 29.99998 31.567954 29.273438 31.003906 C 28.910166 30.721882 28.540311 30.457615 28.111328 30.263672 C 27.682345 30.069729 27.138651 29.932231 26.566406 30.103516 C 25.73815 30.351416 25.278492 31.139669 25.130859 31.765625 C 25.024881 32.214969 25.040549 32.605726 25.037109 32.998047 C 25.008582 32.999549 25.033273 33 25 33 L 23.712891 33 C 21.680377 33 19.565895 32.379527 17.285156 29.996094 C 14.319982 26.899649 11.674463 20.911604 11.277344 20.001953 L 14.769531 20 z M 32.212891 20.007812 C 32.194741 20.011856 32.246666 20.015777 32.289062 20.019531 C 32.283325 20.022641 32.289551 20.016779 32.28125 20.021484 C 32.28041 20.004775 32.237287 20.002377 32.212891 20.007812 z" />
            </svg>
          </a>
        </div>
        <p className="footer__script">Совет обучающихся "Горняк"</p>
      </div>
    </>
  );
}

export default App;
