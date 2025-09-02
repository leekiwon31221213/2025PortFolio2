<template>
  <section id="career" class="section4">
    <h1>Career</h1>

    <ul class="career__inner">
      <li v-for="(career, index) in displayedCareers" :key="index" class="glass">
        <div class="img-box">
          <img :src="career.logo" :alt="career.alt" />
        </div>
        <div class="company-business-box">
          <h3>{{ career.companyName }}</h3>
          <p>{{ career.business }}</p>
        </div>
        <p class="team-txt">{{ career.team }}</p>
        <p>
          {{ career.work1 }} <br />
          {{ career.work2 }}
        </p>
      </li>
    </ul>

    <button type="button" @click="loadMore()" id="more-btn">더 보기</button>
  </section>
  <section id="career" class="section4">
    <h1>Career</h1>

    <ul class="career__inner">
      <li v-for="(career, index) in displayedCareers" :key="index" class="glass">
        <div class="img-box">
          <img :src="career.logo" :alt="career.alt" />
        </div>
        <div class="company-business-box">
          <h3>{{ career.companyName }}</h3>
          <p>{{ career.business }}</p>
        </div>
        <p class="team-txt">{{ career.team }}</p>
        <p>
          {{ career.work1 }} <br />
          {{ career.work2 }}
        </p>
      </li>
    </ul>

    <button type="button" @click="loadMore()" id="more-btn">더 보기</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      visibledCount: 2,
      education: [
        {
          logo: '',
          alt: '',
          academy: '이젠 아카데미(종각)',
          study: '모바일 UI/UX 웹&앱디자인(웹퍼블리셔)',
          span: '2022.07 ~ 2022.12 / 5개월',
        },
        {
          logo: '',
          alt: '',
          academy: '신라대학교(부산)',
          study: '음악학과 피아노 전공',
          span: '2014.03 ~ 2018.02 / 4년',
        },
      ],

      career: [
        {
          logo: 'src/assets/image/career/pravang_logo.jpg',
          alt: '프라뱅 로고',
          companyName: '(주)프라뱅',
          business: '블록체인 및 가상화폐 거래소 전문 개발사',
          team: 'IT개발 · 주임/팀원 (2024.05 ~ 재직 중)',
          work1: 'Java 및 Thymeleaf 기반 환경에서 블록체인 및 가상화폐 거래소 웹 유지보수',
          work2:
            '프론트엔드 개발 · 퍼블리싱 및 하이브리드 앱 기획·디자인/브릿지 개발 · REST API 비동기 통신 기반 데이터 연동',
        },
        {
          logo: 'src/assets/image/career/fastlabs_logo.jpg',
          alt: '패스트랩스 로고',
          companyName: '패스트랩스',
          business: '콘텐츠 중심 브랜드 마케팅 솔루션 기업',
          team: '콘텐츠팀 · 사원 (2023.09 ~ 2024.02 / 6개월)',
          work1:
            '카페24 호스팅 기반 그누보드(이윰빌더) 하이브리드 앱 유지보수 및 쇼핑몰 유지보수 담당',
          work2: 'PHP include를 통한 반복 코드 효율화 및 게시판 연동, SQL 활용 학습 및 적용',
        },
        {
          logo: 'src/assets/image/career/bn_logo.jpg',
          alt: '비엔시스템 로고',
          companyName: '비엔시스템',
          business: '웹·솔루션 개발 및 IT 아웃소싱 기업(웹에이전시)',
          team: 'IT퍼블리셔팀 · 인턴 (2023.04 ~ 2023.07 / 4개월)',
          work1: '웹 퍼블리싱 및 개발 보조 업무 수행',
          work2: '현대 산업개발, 짐싸, 자사 홈페이지 서브 페이지 리뉴얼 작업',
        },
        {
          logo: 'src/assets/image/career/dispis_logo.jpg',
          alt: '디스피스 로고',
          companyName: '디스피스',
          business: '자사몰 및 온라인 마케팅 전문 기업',
          team: '마케팅팀 · 프로 (2021.05 ~ 2022.05 / 1년)',
          work1: '홈쇼핑, 스마트스토어 운영 지원 / 자사몰 마케팅, 고객관리, 바이럴마케팅 등',
        },
        {
          logo: '',
          alt: '증산클라비어',
          companyName: '증산클라비어',
          business: '피아노 학원',
          team: '학원 강사 (2014.12 ~ 2020.02 / 5년 3개월)',
          work1: '원생 관리 및 피아노 교육',
        },
      ],
    }
  },
  computed: {
    displayedCareers() {
      return this.career.slice(0, this.visibledCount)
    },
  },

  methods: {
    loadMore() {
      // console.log('더 보기 클릭됨')
      if (this.visibledCount < this.career.length) {
        this.visibledCount += 1
      }
    },
  },
}
</script>

<style lang="scss">
#career {
  h1 {
    padding: 145px 0 35px 0;
    text-align: center;
    margin: 0 auto;
    font-size: 8rem;
    font-weight: 600;
    letter-spacing: 5px;
  }
  .career__inner {
    position: relative;
    width: 90%;
    margin: 0 auto 250px;

    &::before {
      content: '';
      display: inline-block;
      width: 0.1rem;
      height: 100%;
      background: linear-gradient(0deg, #818cf8, #c084fc, #60a5fa);
      position: absolute;
      top: 20px;
      left: -40px;
    }

    li {
      p {
        color: $dec;
        font-size: 1.8rem;
        font-weight: 400;
        line-height: 1.4;
      }
      .img-box {
        img {
          border-radius: 6px;
        }
      }
      .company-business-box {
        display: flex;
        h3 {
          font-size: 2.1rem;
          font-weight: 600;
        }
        p {
          margin-left: 1rem;
        }
        margin: 1.2rem 0 1rem 0;
      }

      $circleColor: $icon-bg1, $icon-bg2, $icon-bg3, $icon-bg4;

      @for $i from 1 through 4 {
        &:nth-child(#{$i}) {
          @include glass(100%, 100%, 4px, 180%, 2rem, #fff);
          border-radius: 30px;
          align-items: flex-start;
          justify-content: unset;
          flex-direction: column;
          margin: 2rem;
          padding: 4rem 3rem;

          &::before {
            content: '';
            display: inline-block;
            width: 25px;
            height: 25px;
            border-radius: 50%;
            background-color: nth($circleColor, $i);
            position: absolute;
            left: -72px;
            top: 0;
          }
          &:last-child {
            margin-bottom: 0;
          }
        }
      }

      .team-txt {
        margin-bottom: 1.5rem;
      }
    }
  }
  #more-btn {
    color: #fff;
  }
}
</style>
