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
          img: 'src/assets/image/project/coincident.png',
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
          img: 'src/assets/image/project/daki.jpg',
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
          img: 'src/assets/image/project/lemon.jpg',
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
          img: 'src/assets/image/project/jimsa.jpg',
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
          img: 'src/assets/image/project/bn.png',
          alt: '프라뱅 하이브리드앱',
          name: '프라뱅 하이브리드 앱',
          dec: '웹기반으로 만들어진 하이브리드 앱',
          hashTag: ['브릿지 개발', '기획', '디자인', '앱 등록'],
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
