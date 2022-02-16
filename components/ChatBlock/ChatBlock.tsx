import React, { ReactElement } from 'react';
import Image from 'next/image';
import styles from './ChatBlock.module.scss';

import img6 from '../../public/img/прикол.png';

interface Props {}

export default function ChatBlock({}: Props): ReactElement {
  return (
    <div className={styles.chatBlock}>
      <div className={styles.headerBlock}>
        <div className={styles.headerTitle}>
          <div className={styles.chatNameTitle}>#general</div>
          <div className={styles.addInFavorites}>
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                opacity="0.4"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.0064 8.93379L11.8336 14L7.50002 11.6071L3.16648 14L3.99359 8.93379L0.50003 5.35675L5.32924 4.62L7.50002 5.50151e-05L9.67088 4.62L14.5 5.35675L11.0064 8.93379ZM9.12831 5.38874L7.50002 1.88675L5.8572 5.38874L2.07224 5.88107L4.87029 8.73728L4.24995 12.4141L7.50002 10.5919L10.7091 12.4279L10.1297 8.75103L12.9004 5.92385L9.12831 5.38874Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <div className={styles.headerInfo}>
          <div className={styles.membersCount}>
            <svg
              width="10"
              height="14"
              viewBox="0 0 10 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                opacity="0.4"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.40905 13.5H3.09086C1.66001 13.5 0.500021 12.4087 0.500021 11.0625V9.4375C0.500021 8.37039 1.23359 7.47322 2.24855 7.14305C1.69572 6.44134 1.3636 5.5425 1.3636 4.56256C1.3636 2.31885 3.10363 0.499945 5.25004 0.499945C7.39637 0.499945 9.13631 2.31885 9.13631 4.56256C9.13631 5.5425 8.8042 6.44134 8.25145 7.14305C9.26641 7.47322 9.99998 8.37039 9.99998 9.4375V11.0625C9.99998 12.4087 8.83999 13.5 7.40905 13.5ZM8.27272 4.56256C8.27272 2.76756 6.91947 1.31248 5.25004 1.31248C3.58062 1.31248 2.22735 2.76756 2.22735 4.56256C2.22735 6.35742 3.58062 7.81249 5.25004 7.81249C6.91947 7.81249 8.27272 6.35742 8.27272 4.56256ZM9.13631 9.64067C9.13631 8.77708 8.4397 8.05753 7.50594 7.86622C6.86949 8.34207 6.09218 8.62496 5.25004 8.62496C4.4079 8.62496 3.63051 8.34207 2.99406 7.86622C2.06038 8.05753 1.3636 8.77708 1.3636 9.64067V10.8594C1.3636 11.869 2.31272 12.6876 3.48348 12.6876H7.01652C8.18735 12.6876 9.13631 11.869 9.13631 10.8594V9.64067Z"
                fill="black"
              />
            </svg>
            <div className={styles.membersNumber}>1,093</div>
          </div>
          <input type="text" placeholder="Искать..." className={styles.searchPost} />
          <div className={styles.notificationsSignal}>
            <svg
              width="9"
              height="8"
              viewBox="0 0 9 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.50009 0C6.70925 0 8.5 1.79081 8.5 4C8.5 6.20909 6.70925 8 4.50009 8C2.29093 8 0.5 6.20909 0.5 4C0.5 1.79081 2.29093 0 4.50009 0Z"
                fill="#FD4948"
              />
            </svg>
          </div>
          <div className={styles.notifications}>
            <svg
              width="23"
              height="24"
              viewBox="0 0 23 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                opacity="0.4"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.3512 20.8002C14.995 22.6258 13.445 24 11.5862 24C9.72744 24 8.17747 22.6258 7.8214 20.8002H0.827637L3.90146 14.4V7.99992C3.90146 3.58173 7.34212 -3.05176e-05 11.5862 -3.05176e-05C15.8305 -3.05176e-05 19.271 3.58173 19.271 7.99992V14.4L22.3448 20.8002H15.3512ZM11.5862 22.4002C12.5886 22.4002 13.4329 21.7303 13.7506 20.8002H9.42206C9.7396 21.7303 10.5839 22.4002 11.5862 22.4002ZM17.734 14.4V7.99992C17.734 4.46556 14.9816 1.60003 11.5862 1.60003C8.19086 1.60003 5.43844 4.46556 5.43844 7.99992V14.4L3.13298 19.2001H20.0393L17.734 14.4Z"
                fill="black"
              />
            </svg>
          </div>
          <div className={styles.moreSettings}>
            <svg
              width="9"
              height="27"
              viewBox="0 0 9 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.3">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.90001 10.9C6.44638 10.9 7.69994 12.1536 7.69994 13.7C7.69994 15.2464 6.44638 16.5 4.90001 16.5C3.35365 16.5 2.09994 15.2464 2.09994 13.7C2.09994 12.1536 3.35365 10.9 4.90001 10.9Z"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.90006 1.30001C6.44642 1.30001 7.69999 2.5536 7.69999 4.1C7.69999 5.6464 6.44642 6.89999 4.90006 6.89999C3.3537 6.89999 2.1 5.6464 2.1 4.1C2.1 2.5536 3.3537 1.30001 4.90006 1.30001Z"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.90006 20.5C6.44642 20.5 7.69999 21.7536 7.69999 23.3C7.69999 24.8464 6.44642 26.1 4.90006 26.1C3.3537 26.1 2.1 24.8464 2.1 23.3C2.1 21.7536 3.3537 20.5 4.90006 20.5Z"
                  fill="black"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.chatBody}>
        <div className={styles.messageItem}>
          <Image className={styles.messagePhoto} width={500} height={500} src={img6} alt="" />
          <div className={styles.message}>
            <div className={styles.messageTitle}>
              <div className={styles.messangerName}>VlaDick2008</div>
              <div className={styles.messageDate}>12:30</div>
            </div>
            <div className={styles.messageText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias accusantium non
              cupiditate sequi commodi minima id ea harum molestias, fugit architecto deleniti
              ratione impedit, eaque itaque, sapiente in incidunt. Cumque consequatur quos aut quis
              deleniti aperiam ipsum enim voluptatibus vitae, velit dolor repellendus inventore
              aliquam est impedit in saepe error eveniet non at dicta iusto nisi. Magnam vel
              voluptates labore adipisci suscipit natus, eum rem facere distinctio minus commodi
              fugit ducimus, temporibus nemo laudantium molestiae eligendi assumenda voluptas
              reprehenderit ipsam ex beatae culpa voluptate quo! Deleniti exercitationem tempore
              itaque. Suscipit aspernatur officiis nulla similique ex? Provident, quo eum error
              pariatur voluptatem dolores. Cum, qui animi dicta accusamus est, tenetur dolore id
              voluptas quae nam esse itaque! Harum sapiente quaerat, tenetur nisi, laboriosam
              libero, adipisci vitae facilis dolor aspernatur laborum natus sequi doloremque
              perferendis consequuntur provident corrupti explicabo exercitationem tempore quis
              placeat hic culpa. Consequatur, eligendi quod! Autem magnam animi rerum corrupti iure
              cumque ex qui, vitae modi fugiat iusto dolorem commodi. Culpa deserunt sit soluta ab
              eligendi, ad sequi consectetur. Distinctio excepturi minima nesciunt voluptate tempora
              aut nemo architecto quis, molestias ad voluptatibus odit saepe dolor porro voluptatum
              assumenda reiciendis ex. Velit, qui minus vitae numquam porro atque eaque sunt.
            </div>
          </div>
        </div>
        <div className={styles.messageLineBlock}>
          <div className={styles.messageLine}></div>
          <div className={styles.messageLineText}>Вчера</div>
        </div>
      </div>
      <div className={styles.sendingBlock}>
        <button className={styles.addFile}>
          <svg
            width="19"
            height="31"
            viewBox="0 0 19 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              opacity="0.4"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.333515 5.95844C0.333515 2.85186 3.3556 0.333374 7.08339 0.333374C10.8113 0.333374 13.8333 2.85186 13.8333 5.95844V22.8335C13.8333 24.9046 11.8186 26.5832 9.33332 26.5832C6.84809 26.5832 4.83336 24.9046 4.83336 22.8335V7.83346H7.08339V22.8335C7.08339 23.8689 8.09064 24.7085 9.33332 24.7085C10.576 24.7085 11.5834 23.8689 11.5834 22.8335V5.95844C11.5834 3.88733 9.56865 2.20843 7.08339 2.20843C4.59803 2.20843 2.58331 3.88733 2.58331 5.95844V22.8335C2.58331 25.9401 5.60541 28.4586 9.33332 28.4586C13.0612 28.4586 16.0833 25.9401 16.0833 22.8335V4.08345H18.3333V23.7708C17.7786 27.4694 13.9222 30.3335 9.33332 30.3335C4.74472 30.3335 0.888141 27.4694 0.333252 23.7708L0.333515 5.95844Z"
              fill="black"
            />
          </svg>
        </button>
        <button className={styles.voiceMessage}>
          <svg
            width="21"
            height="30"
            viewBox="0 0 21 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              opacity="0.4"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.47222 29.9198C7.97005 29.9198 7.56296 29.5053 7.56296 28.994C7.56296 28.4827 7.97005 28.0682 8.47222 28.0682H9.38123V26.1747C4.89282 25.7621 1.09274 22.326 0.290283 17.8827H2.10855C2.93609 21.5926 6.39744 24.3642 10.2904 24.3642C14.1832 24.3642 17.6445 21.5926 18.472 17.8827H20.2903C19.4877 22.326 15.6876 25.7621 11.1994 26.1747V28.0682H12.1085C12.6105 28.0682 13.0176 28.4827 13.0176 28.994C13.0176 29.5053 12.6105 29.9198 12.1085 29.9198H8.47222ZM10.2904 22.5126C6.77573 22.5126 3.92668 19.6107 3.92668 16.0311V6.77207C3.92668 3.19242 6.77573 0.290283 10.2904 0.290283C13.8047 0.290283 16.6539 3.19242 16.6539 6.77207V16.0311C16.6539 19.6107 13.8047 22.5126 10.2904 22.5126ZM14.8358 6.77207C14.8358 4.21518 12.8007 2.14217 10.2904 2.14217C7.77992 2.14217 5.74483 4.21518 5.74483 6.77207V16.0311C5.74483 18.588 7.77992 20.6607 10.2904 20.6607C12.8007 20.6607 14.8358 18.588 14.8358 16.0311V6.77207Z"
              fill="black"
            />
          </svg>
        </button>
        <input
          placeholder="Message in ({peremennayaKanala})"
          type="text"
          className="sending-input"
        />
        <button className={styles.emoji}>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.69394 17.0625C8.63691 16.9622 8.5606 16.8741 8.4694 16.8034C8.3782 16.7327 8.27391 16.6808 8.16255 16.6505C8.05119 16.6203 7.93494 16.6124 7.82051 16.6273C7.70608 16.6421 7.59572 16.6795 7.49578 16.7372C7.39585 16.7949 7.30831 16.8718 7.23822 16.9635C7.16812 17.0551 7.11685 17.1598 7.08736 17.2713C7.05786 17.3829 7.05073 17.4992 7.06636 17.6135C7.08199 17.7278 7.12008 17.838 7.17844 17.9375C7.86948 19.1351 8.86379 20.1296 10.0613 20.8208C11.2588 21.512 12.6173 21.8756 13.9999 21.875C15.3826 21.8753 16.7409 21.5115 17.9383 20.8203C19.1358 20.1291 20.1301 19.1349 20.8214 17.9375C20.8798 17.838 20.9179 17.7278 20.9335 17.6135C20.9492 17.4992 20.942 17.3829 20.9125 17.2713C20.883 17.1598 20.8318 17.0551 20.7617 16.9635C20.6916 16.8718 20.604 16.7949 20.5041 16.7372C20.4042 16.6795 20.2938 16.6421 20.1794 16.6273C20.0649 16.6124 19.9487 16.6203 19.8373 16.6505C19.726 16.6808 19.6217 16.7327 19.5305 16.8034C19.4393 16.8741 19.363 16.9622 19.3059 17.0625C18.7685 17.9941 17.9951 18.7676 17.0636 19.3053C16.1321 19.8429 15.0754 20.1256 13.9999 20.125C12.9244 20.1256 11.8678 19.8429 10.9363 19.3053C10.0048 18.7676 9.23139 17.9941 8.69394 17.0625V17.0625ZM12.2499 8.953V8.75C12.2499 8.28587 12.0656 7.84075 11.7374 7.51256C11.4092 7.18437 10.9641 7 10.4999 7H5.73994C5.47393 7.00001 5.21143 7.06066 4.97237 7.17734C4.73332 7.29402 4.52401 7.46366 4.36036 7.67338C4.19671 7.88309 4.08301 8.12735 4.02793 8.38759C3.97284 8.64784 3.9778 8.91721 4.04244 9.17525L4.58669 11.3488C4.77596 12.1059 5.21289 12.7781 5.82802 13.2585C6.44316 13.7389 7.20121 13.9999 7.98169 14H8.74994C9.62958 14.0002 10.477 13.6692 11.1237 13.0729C11.7703 12.4765 12.1686 11.6585 12.2394 10.7817C12.8058 10.5878 13.4013 10.4925 13.9999 10.5C14.6877 10.5 15.2949 10.612 15.7604 10.7817C15.8313 11.6585 16.2296 12.4765 16.8762 13.0729C17.5228 13.6692 18.3703 14.0002 19.2499 14H20.0164C20.7969 13.9999 21.555 13.7389 22.1701 13.2585C22.7853 12.7781 23.2222 12.1059 23.4114 11.3488L23.9557 9.17525C24.0203 8.91736 24.0253 8.64813 23.9703 8.38802C23.9153 8.12791 23.8018 7.88374 23.6383 7.67407C23.4749 7.46439 23.2658 7.29471 23.0269 7.17791C22.7881 7.06112 22.5258 7.00027 22.2599 7H17.4999C17.0358 7 16.5907 7.18437 16.2625 7.51256C15.9343 7.84075 15.7499 8.28587 15.7499 8.75V8.953C15.1768 8.81575 14.5893 8.7476 13.9999 8.75C13.3874 8.75 12.7924 8.82 12.2499 8.953Z"
              fill="#B1B1B1"
            />
            <path
              d="M28 14C28 17.713 26.525 21.274 23.8995 23.8995C21.274 26.525 17.713 28 14 28C10.287 28 6.72601 26.525 4.10051 23.8995C1.475 21.274 0 17.713 0 14C0 10.287 1.475 6.72601 4.10051 4.10051C6.72601 1.475 10.287 0 14 0C17.713 0 21.274 1.475 23.8995 4.10051C26.525 6.72601 28 10.287 28 14V14ZM26.25 14C26.25 10.7511 24.9594 7.63526 22.6621 5.33794C20.3647 3.04062 17.2489 1.75 14 1.75C10.7511 1.75 7.63526 3.04062 5.33794 5.33794C3.04062 7.63526 1.75 10.7511 1.75 14C1.75 17.2489 3.04062 20.3647 5.33794 22.6621C7.63526 24.9594 10.7511 26.25 14 26.25C17.2489 26.25 20.3647 24.9594 22.6621 22.6621C24.9594 20.3647 26.25 17.2489 26.25 14Z"
              fill="#B1B1B1"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
