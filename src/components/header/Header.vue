<template>
  <header>
    <nav>
      <ul>
        <li>
          <a href="#none" lang="en">About</a>
        </li>
        <li>
          <a href="#none" lang="en">Work</a>
        </li>
        <li>
          <a href="#none" lang="en">Skill</a>
        </li>
        <li>
          <a href="#none" lang="en">Project</a>
        </li>
        <li>
          <a href="#none" lang="en">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
header {
  height: 105px;
  border-bottom: 1px solid $border;
}
nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: inherit;
  ul {
    display: flex;
    width: 100%;
    text-align: right;
    justify-content: flex-end;
    margin: 0 3rem;
    li {
      display: flex;
      justify-content: flex-end;
      margin-right: 5rem;
      &:last-child {
        margin-right: 0;
      }
      a {
        color: $white;
        -webkit-text-fill-color: $white;
        font-size: 2.3rem;
        transition: -webkit-text-fill-color 3s ease-in-out;
        &:hover {
          background-image: $point-color;
          background-size: 200% 100%;
          background-position: 0% 0;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientMove 1s ease-in-out;
        }
      }
    }
  }
}

// 키프레임으로 그라데이션 이동 정의
@keyframes gradientMove {
  from {
    background-position: 0% 0;
  }
  to {
    background-position: 100% 0;
  }
}
</style>
