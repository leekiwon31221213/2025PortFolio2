<template>
  <section id="skill" class="section3">
    <h1 lang="en">Skill & Tool</h1>
    <p class="desc">
      웹퍼블리싱 기초부터 모던 프론트엔드 기술까지 <br />
      시멘틱 태그를 활용한 기본에 충실한 마크업과 스타일링부터, 최신 프레임워크와 렌더링 기법을
      적용한 현대적인 웹 개발까지 폭넓게 다룹니다.
    </p>

    <ul class="skills-box">
      <li class="front-skill">
        <ul class="skill-list">
          <li>
            <h3>{{ front.title }}</h3>
          </li>
          <li v-for="(skill, index) in front.skills" :key="index" :type="skill.type">
            <p class="skill-name" lang="en">{{ skill.name }}</p>
            <div class="skill-level">
              <div class="skill-bar" :style="{ '--target-width': skill.level + '%' }">
                <span class="skill-text">{{ skill.level }}%</span>
              </div>
            </div>
          </li>
        </ul>
      </li>

      <li class="front-skill">
        <ul class="skill-list">
          <li>
            <h3>{{ front.title }}</h3>
          </li>
          <li v-for="(skill, index) in front.skills" :key="index" :type="skill.type">
            <p class="skill-name" lang="en">{{ skill.name }}</p>
            <div class="skill-level">
              <div class="skill-bar" :style="{ '--target-width': skill.level + '%' }">
                <span class="skill-text">{{ skill.level }}%</span>
              </div>
            </div>
          </li>
        </ul>
      </li>

      <li class="front-skill">
        <h3>{{ front.title }}</h3>

        <ul class="skill-list">
          <li v-for="(skill, index) in front.skills" :key="index" :type="skill.type">
            <p class="skill-name" lang="en">{{ skill.name }}</p>
            <div class="skill-level">
              <div class="skill-bar" :style="{ '--target-width': skill.level + '%' }">
                <span class="skill-text">{{ skill.level }}%</span>
              </div>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      // 프론트엔드
      front: {
        title: 'Frontend',
        skills: [
          { name: 'HTML', level: 90, type: 'markup' },
          { name: 'CSS/SCSS', level: 90, type: 'style' },
          { name: 'JavaScript & jQuery', level: 75, type: 'programming' },
          { name: 'Vue', level: 70, type: 'framework' },
          { name: 'SEO', level: 60, type: 'concept' },
          { name: 'Semantic', level: 65, type: 'concept' },
          { name: 'PHP', level: 30, type: 'backend' },
        ],
      },
      // 디자인
      design: {
        title: 'Design',
      },
      // 협업툴
      collaboration: {
        title: 'Collaboration',
      },
      // 기타
      etc: {
        title: 'Etc',
      },
    }
  },
}
</script>

<style lang="scss">
#skill {
  width: 90%;
  margin: 0 auto;
  h1 {
    padding: 145px 0 35px 0;
    text-align: center;
    margin: 0 auto;
    font-size: 8rem;
    font-weight: 600;
    letter-spacing: 5px;
  }
  p.desc {
    text-align: center;
    line-height: 3.5rem;
    font-size: 2rem;
    color: $dec;
    font-weight: 200;
    margin-bottom: 12.8rem;
  }
  .skills-box {
    display: flex;
    justify-content: space-evenly;
    li {
      display: flex;
      width: calc(100% / 3);
    }
    .front-skill {
      .skill-list {
        width: 100%;
        margin-right: 5rem;
        &:nth-of-type(3) {
          margin-right: 0;
        }
        > li {
          margin-bottom: 15px;
          display: flex;
          width: 100%;

          .skill-name {
            font-weight: 200;
            margin-bottom: 10px;
            width: 200px;
            color: $dec;
            font-size: 1.7rem;
          }

          .skill-level {
            background: #333;
            border-radius: 10px;
            overflow: hidden;
            height: 20px;
            display: flex;
            width: 100%;

            .skill-bar {
              width: 0;
              height: 100%;
              background: linear-gradient(90deg, #ff9966, #822d30);
              border-radius: 10px;
              display: flex;
              align-items: center;
              justify-content: flex-end;
              padding-right: 5px;
              color: #fff;
              animation: fillBar 2.3s ease-in-out forwards;

              .skill-text {
                font-size: 1.3rem;
                font-weight: 600;
              }
            }
          }
        }
      }
    }
  }
}

@keyframes fillBar {
  from {
    width: 0;
  }
  to {
    width: var(--target-width);
  }
}
</style>
