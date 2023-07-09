FROM quay.io/afx-abu/abu-md
RUN git clone https://github.com/Akshay-temp/chugi-md /root/chugi/
WORKDIR /root/chugi/
RUN yarn install --network-concurrency 1
CMD ["node", "index.js"]
