FROM node:18
WORKDIR /app

# 패키지 설치
COPY package.json package-lock.json ./
RUN npm ci

# 애플리케이션 복사 및 빌드
COPY . .
RUN npm run build && npm prune --production

# 애플리케이션 실행
CMD ["npx prisma generate && node build"]
