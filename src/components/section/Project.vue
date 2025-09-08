<template>
  <section id="project" class="section5">
    <h1>Project</h1>

    <Swiper
      :modules="modules"
      :slides-per-view="3"
      :space-between="80"
      :pagination="{ clickable: true }"
      :loop="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <!-- 각 프로젝트를 별도의 SwiperSlide로 렌더링 -->
      <SwiperSlide v-for="(project, index) in project" :key="index">
        <ul class="project-list">
          <li>
            <img :src="project.img" :alt="project.alt" class="project-img" />
            <h3>{{ project.name }}</h3>
            <p>{{ project.dec }}</p>
            <div class="hashtags">
              <span v-for="(tag, tagIndex) in project.hashTag" :key="tagIndex">#{{ tag }}</span>
            </div>
            <a :href="project.link1 || '#'" class="project-btn">
              {{ project.btnTxt }}
              <img :src="project.icon" alt="arrow icon" class="btn-icon" />
            </a>
          </li>
        </ul>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script>
// Swiper 모듈 및 컴포넌트 가져오기
import { Pagination, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

// Swiper 스타일 가져오기
import 'swiper/css'
import 'swiper/css/pagination'

export default {
  data() {
    return {
      project: [
        {
          img: 'src/assets/image/project/pravang_app.png',
          alt: '프라뱅 하이브리드앱',
          name: '프라뱅 하이브리드 앱',
          dec: '웹기반으로 만들어진 하이브리드 앱',
          hashTag: ['브릿지 개발', '기획', '디자인', '앱 등록'],
          link1: '',
          link2: '',
          btnTxt: 'View Project',
          icon: 'src/assets/image/project/arrow_right_icon.svg',
        },
        {
          img: 'src/assets/image/project/pravang_web.jpg',
          alt: '프라뱅 반응형 웹',
          name: '프라뱅 반응형 웹',
          dec: 'Java 및 타임리프(Thymeleaf) 기반 환경에서 블록체인 및 가상화폐 거래소 유지보수',
          hashTag: ['Java 환경', '블록체인', 'Rest API', '반응형'],
          link1: 'https://www.pravang.com/index',
          link2: null,
          btnTxt: 'View Project',
          icon: 'src/assets/image/project/arrow_right_icon.svg',
        },
        {
          img: 'src/assets/image/project/coincident.png',
          alt: 'coincident 기업페이지',
          name: 'coincident 회사 소개페이지',
          dec: 'Vue 프로젝트 작업 후 Nuxt  구조로 마이그레이션 진행',
          hashTag: ['Vue', 'Nuxt', '마이그레이션', '외주작업'],
          link1: '',
          link2: '',
          btnTxt: 'View Project',
          icon: 'src/assets/image/project/arrow_right_icon.svg',
        },

        {
          img: 'src/assets/image/project/daki.jpg',
          alt: '시간을 건너는 편지',
          name: '시간을 건너는 편지',
          dec: '대학교 행사 이벤트 랜딩페이지',
          hashTag: ['하드코딩', '외주작업', '반응형', '비밀번호 1234'],
          link1: '',
          link2: '',
          btnTxt: 'View Project',
          icon: 'src/assets/image/project/arrow_right_icon.svg',
        },

        {
          img: 'src/assets/image/project/daki.jpg',
          alt: 'VPN 구독 서비스',
          name: 'VPN 구독 서비스 ',
          dec: 'VPN 구독 서비스 프론트 개발',
          hashTag: ['24 페이지', '제작기간 2주', '반응형', '외주작업'],
          link1: '',
          link2: '',
          btnTxt: 'View Project',
          icon: 'src/assets/image/project/arrow_right_icon.svg',
        },
        {
          img: 'src/assets/image/project/daki.jpg',
          alt: '다키스토어',
          name: '다키스토어',
          dec: '카페 24 쇼핑몰 유지보수 및 개발',
          hashTag: ['카페24', '쇼핑몰', '유지보수'],
          link1: '',
          link2: '',
          btnTxt: 'View Project',
          icon: 'src/assets/image/project/arrow_right_icon.svg',
        },
        {
          img: 'src/assets/image/project/lemon.jpg',
          alt: '레몬 앱소개 페이지',
          name: '레몬 앱소개 페이지',
          dec: '웹기반으로 만들어진 하이브리드 앱',
          hashTag: ['반응형', '하이브리드 앱 소개'],
          link1: '',
          link2: '',
          btnTxt: 'View Project',
          icon: 'src/assets/image/project/arrow_right_icon.svg',
        },

        {
          img: 'src/assets/image/project/jimsa.jpg',
          alt: '짐싸 이벤트 랜딩페이지',
          name: '짐싸 이벤트 랜딩페이지',
          dec: '반응형 이벤트 페이지',
          hashTag: ['에이전시', '웹 퍼블리싱', '4일', '이벤트랜딩'],
          link1: '',
          link2: '',
          btnTxt: 'View Project',
          icon: 'src/assets/image/project/arrow_right_icon.svg',
        },
        {
          img: 'src/assets/image/project/bn.png',
          alt: '비엔시스템 서비스 페이지',
          name: '비엔시스템 서비스 리뉴얼',
          dec: '자사 서비스 페이지 리뉴얼',
          hashTag: ['반응형', '에이전시', '디자인', '리뉴얼'],
          link1: '',
          link2: '',
          btnTxt: 'View Project',
          icon: 'src/assets/image/project/arrow_right_icon.svg',
        },
      ],
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination, A11y], // Navigation, Scrollbar 제거
    }
  },
}
</script>

<style lang="scss" scoped>
h1 {
  padding: 145px 0 35px 0;
  text-align: center;
  margin: 0 auto;
  font-size: 8rem;
  font-weight: 600;
  letter-spacing: 5px;
}
.swiper {
  width: 90%;
  margin: 0 auto;
}
.project-img {
  width: 50rem;
  border-radius: 2rem;
}

.project-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;

  width: 580px;
}

.project-list li {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.hashtags {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
}

.project-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.btn-icon {
  width: 1.5rem;
  height: 1.5rem;
}
</style>
