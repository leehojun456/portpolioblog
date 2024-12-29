FROM node:18

WORKDIR /app

# 패키지 설치
COPY package.json package-lock.json ./
RUN npm ci

# Prisma 생성을 빌드 단계에서 실행
COPY prisma ./prisma
RUN npx prisma generate

# 애플리케이션 복사 및 빌드
COPY . .
RUN npm run build && npm prune --production

# 애플리케이션 실행
CMD ["node", "build"]