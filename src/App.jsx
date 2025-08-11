import { useState, useEffect } from 'react'
import { inilogicScript } from './logic';
import 'boxicons/css/boxicons.min.css'
import './App.css'

//buat bungkus semua konten
function App() {
  useEffect(() => {
    inilogicScript();
  }, []);

  return (
    <div className="wrapper">
      <Cover />
      <Book />
    </div>
  );
}

//buat cover kiri dan kanan
function Cover() {
  return (
    <>
      <div className="cover cover-left">
        <audio id='bg-music' loop>
          <source src='/rainbow.mp3' type='audio/mpeg'/>
        </audio>
      </div>
      <div className="cover cover-right"></div>
    </>
  );
}

//untuk tempat semua halaman di portofolio
function Book() {
  return (
    <div className="book">
      <div className="book-page page-left">
        <div className="cover-gambar" id="cover-front">
          <img src="/cover2.png" alt="" />
        </div>
      </div>

      <BookPage id="turn-1" front={<ProfileFront />} back={<AboutMeBack />} />
      <BookPage id="turn-2" front={<CertificatesFront />} back={<CertificatesBack />} />
      <BookPage id="turn-3" front={<ReflectionFront />} back={<ContactBack />} />
    </div>
  );
}

//untuk satu halaman buku punya dua sisi
function BookPage({ id, front, back }) {
  return (
    <div className="book-page page-right turn" id={id}>
      <div className="page-front">{front}</div>
      <div className="page-back">{back}</div>
    </div>
  );
}

//halaman 1 & 2
function ProfileFront() {
  return (
    <div className="profile-page">
      <img src="/zize.png" alt="" />
      <h1>Azizah Nur Faridah</h1>
      <h3>Student</h3>

      <div className="social-media">
        <a href="https://www.instagram.com/zhnwve_"><i className="bx bxl-instagram"></i></a>
        <a href="https://open.spotify.com/user/minjaee"><i className="bx bxl-spotify"></i></a>
        <a href="https://x.com/strawn4naa"><i className="bx bxl-twitter"></i></a>
      </div>

      <p>Halo! Aku Azizah Nur Faridah, siswi SMKN 8 Malang. Aku belum yakin apa skill-ku saat ini,
        tapi aku suka banget ngulik hal-hal baru yang menarik perhatian. Karena makin banyak
        orang merasa stres, termasuk aku sendiri, aku punya cita-cita jadi psikolog biar bisa
        bantu orang lain sekaligus memahami diriku lebih baik.</p>

      <div className="btn-box">
        <a href="#" className="btn contact">Contact Me</a>
      </div>

      <span className="number-page">1</span>
      <span className="nextprev-btn" data-page="turn-1">
        <i className="bx bx-chevron-right"></i>
      </span>
    </div>
  )
}

function AboutMeBack() {
  return (
    <>
      <h1 className='title'>About Me</h1>

      <div className="aboutme-box">
        <div className="aboutme-content">
          <span className='tentang'>Nama Lengkap</span>
          <p>Azizah Nur Faridah</p>
        </div>

        <div className="aboutme-content">
          <span className='tentang'>Tempat dan tanggal lahir</span>
          <p>Malang, 18 November 2008</p>
        </div>

        <div className="aboutme-content">
          <span className='tentang'>Keterampilan (non akademik)</span>
          <p>Kreatif membuat kerajinan tangan, Manajemen waktu saat tugas numpuk, Suka bereksperimen
            resep di dapur</p>
        </div>

        <div className="aboutme-content">
          <span className='tentang'>Hobi</span>
          <p>Menonton drama korea / film yang bergenre thriller, fantasi, action dan horor. Selain itu
            aku juga Hobi
            membaca novel dan mendengarkan lagu Kpop, HipHop atau Indiepop</p>
        </div>

        <div className="aboutme-content">
          <span className='tentang'>Tokoh Fav</span>
          <p>Na Jaemin, Lee Donghyuck & Lee Jeno from NCT </p>
        </div>

        <div className="aboutme-content">
          <span className='tentang'>MBTI</span>
          <p>INFJ / ENFJ-T</p>
        </div>
      </div>

      <span className='number-page'>2</span>
      <span className="nextprev-btn back" data-page="turn-1">
        <i className="bx bx-chevron-left"></i>
      </span>
    </>
  )
}

//halaman 3 & 4
function CertificatesFront() {
  return (
    <>
      <div className="page-front">
        <h1 className='title'>Certificates and Awards</h1>

        <div className="portofolio-container">
          <div className="portofolio-top">
            <div className="portofolio-box">
              <img src="/sertifIpa1.jpg" alt="" />
              <div className="portofoli-layer">
                <h4>Medali Emas (Nasional)</h4>
                <p>Pas MTs aku pernah ikut Olimpiade IPA, eh gak nyangka bisa lanjut sampai tingkat nasional, terus malah dapet medali emas.</p>
              </div>
            </div>
            <div className="portofolio-box">
              <img src="/sertifIpa2.jpg" alt="" />
              <div className="portofoli-layer">
                <h4>Peringkat 7 (Prov)</h4>
                <p>Nah sebelum dapat medali emas di tingkat nasional, aku sempat dapat peringkat 7 tingkat provinsi.</p>
              </div>
            </div>
          </div>

          <div className="portofolio-bottom">
            <div className="portofolio-box">
              <img src="/ai.jpg" alt="" />
              <div className="portofoli-layer">
                <h4>AI (Kelas)</h4>
                <p>Pas SMK lomba Artificial Intelligent (AI) sama Aurel. Awalnya ga pd kalau bisa nyelesain, kok
                  malah juara 1 tingkat kelas.</p>
              </div>
            </div>
          </div>
        </div>
        <span className="number-page">3</span>
        <span className="nextprev-btn" data-page="turn-2">
          <i className="bx bx-chevron-right"></i>
        </span>
      </div>
    </>
  )
}

function CertificatesBack() {
  return (
    <>
      <h1 className='title'>Certificates and Awards</h1>

      <div className="portofolio-container">
        <div className="portofolio-top">
          <div className="portofolio-box">
            <img src="/sertifBing1.jpg" alt="" />
            <div className="portofoli-layer">
              <h4>Peserta (Nasional)</h4>
              <p>Tetap di MTs, Olimpiade Bahasa Inggris tapi ga lolos sampai juara nasional,
                cuma bisa jadi pesertanya saja.</p>
            </div>
          </div>
          <div className="portofolio-box">
            <img src="/sertifBing2.jpg" alt="" />
            <div className="portofoli-layer">
              <h4>Medali Perunggu (Prov)</h4>
              <p>Sebelum jadi peserta Olimpiade Bahasa Inggris tingkat nasional,
                sempat dapat medali tingkat provinsi.</p>
            </div>
          </div>
        </div>

        <div className="portofolio-bottom">
          <div className="portofolio-box">
            <img src="/sertifPenulis.jpg" alt="" />
            <div className="portofoli-layer">
              <h4>Penulis Terpilih (kelas)</h4>
              <p>Ini juga masih di MTs, jadi penulis terpilih tingkat kelas
                dan bisa launching 3 karya yaitu dua cerpen 1 puisi bertema rupa.</p>
            </div>
          </div>
        </div>
      </div>
      <span className="number-page">4</span>
      <span className="nextprev-btn back" data-page="turn-2">
        <i className="bx bx-chevron-left"></i>
      </span>
    </>
  )
}

//halaman 5 & 6
function ReflectionFront() {
  return (
    <>
      <div className="page-front">
        <h1 className="title">Inside My Mind</h1>
        <div className="reflection-box">
          <div className="reflection-content">
            <i className="bx bx-like"></i>
            <h3>Kesukaanku</h3>
            <p>Baca Novel / AU sampai pagi (ga sadar ajasih), Nasi Goreng sedap broo dan
              kadang cerita sampai ga tau waktu, KEJU ITU ENAK!</p>
          </div>

          <div className="reflection-content">
            <i className="bx bx-dislike"></i>
            <h3>Ketidaksukaan</h3>
            <p>Ramai orang itu berisik banget lebih enak sendiri dan ruangan sempit bikin sesak nafas.
              Rasa Coklat dan Matcha.</p>
          </div>

          <div className="reflection-content">
            <i className="bx bx-book"></i>
            <h3>Zona Nyaman Belajarku</h3>
            <p>Aku belajar pake jadwal yang aku bikin sendiri niatnya sih tepat waktu, ujung-ujungnya molor juga.
              Otakku langsung nyala kalau ada gambar / perumpamaan dan lagu-lagu yang nemenin.
              Tapi kalau disuruh maju presentasi, nyali kadang ngumpet duluan, apalagi kalau ngerasa ketinggalan sama temen-temen.</p>
          </div>
        </div>

        <span className="number-page">5</span>
        <span className="nextprev-btn" data-page="turn-3">
          <i className="bx bx-chevron-right"></i>
        </span>
      </div>
    </>
  )
}

function ContactBack() {
  return (
    <>
      <h1 className="title">Contact Me!</h1>

      <div className="contact-box">
        <form action="#">
          <input type="text" className='field' placeholder='Nama' required />
          <input type="email" className='field' placeholder='Email' required />
          <textarea name='' id='' cols={30} rows={10} className='field' placeholder='Pesan'
            required></textarea>
          <input type='submit' className='btn' value={'Kirim Pesan'}></input>
        </form>
      </div>

      <span className="number-page">6</span>
      <span className="nextprev-btn back" data-page="turn-3">
        <i className="bx bx-chevron-left"></i>
      </span>

      <a href="#" className='back-profile'>
        <p>Profile</p>
        <i className="bx bxs-user"></i>
      </a>
    </>
  )
}





export default App;