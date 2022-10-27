# イメージのベースを指定
FROM mysql:8.0

# 環境変数（TZ）を定義
ENV TZ=UTC

# MySQLの設定ファイルをコンテナ内にコピーして対応づける
COPY ./docker/mysql/my.cnf /etc/my.cnf
