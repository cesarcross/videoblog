import React, { useState, useEffect } from "react";

import {
  MainContainer,
  Content,
  AdTablet,
  // AdUnitRectangle,
  AdMobile,
  MainText,
  Search,
  SearchBar,
} from "./Main.style";
import Videos from "../Videos/Videos.component";
import Pagination from "../Pagination/Pagination.component";
import { GoSearch } from "react-icons/go";

const Main = ({ videos }) => {
  const [filteredVideos, setFilteredVideos] = useState(videos);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [videosPerPage] = useState(16);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    setFilteredVideos(
      [...videos].filter((video) =>
        video.title.toLowerCase().includes(search.toLowerCase())
      )
    );
    setLoading(false);
    setCurrentPage(1);
  }, [search, videos]);

  // Get current videos
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentFilteredVideos = filteredVideos.slice(
    indexOfFirstVideo,
    indexOfLastVideo
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <MainContainer>
      <MainText>
        Bem vindo ao Memorial do Corinthians! Reunimos os vídeos mais
        importantes da história do Corinthians, desde o Paulista de 77 até
        momentos marcantes das conquistas da Libertadores e do Mundial.
        Compartilhe com os amigos e celebre registros inesquecíveis nesta
        trajetória do Timão.
      </MainText>

      {/*
      <AdUnitRectangle>
        <iframe
          title="midsize_banner"
          src="//www.topdisplaynetwork.com/watchnew?key=3027bf75916c21f7921c251ff0ac2898"
          width="468"
          height="60"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </AdUnitRectangle>
 */}
      <AdMobile>
        <iframe
          title="mobile_banner"
          src="//www.topdisplaynetwork.com/watchnew?key=bd18cd9f3b2bfaa7001886c11bbf51ef"
          width="320"
          height="50"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </AdMobile>

      <AdTablet>
        <iframe
          title="desktop_banner"
          src="//www.topdisplaynetwork.com/watchnew?key=fb88a499e07584b47564179548308523"
          width="728"
          height="90"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </AdTablet>

      <Search>
        <GoSearch
          style={{
            marginLeft: "1rem",
            position: "absolute",
            color: "white",
          }}
          size="1.5em"
        />
        <SearchBar
          type="text"
          placeholder="Busca"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>
      <Content>
        <Videos videos={currentFilteredVideos} loading={loading} />
        <AdTablet />
      </Content>

      <AdMobile>
        <iframe
          title="mobile_banner"
          src="//www.topdisplaynetwork.com/watchnew?key=bd18cd9f3b2bfaa7001886c11bbf51ef"
          width="320"
          height="50"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </AdMobile>

      <Pagination
        videosPerPage={videosPerPage}
        totalVideos={filteredVideos.length}
        paginate={paginate}
      />

      <AdMobile>
        <iframe
          title="mobile_banner"
          src="//www.topdisplaynetwork.com/watchnew?key=bd18cd9f3b2bfaa7001886c11bbf51ef"
          width="320"
          height="50"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </AdMobile>

      <AdTablet>
        <iframe
          title="desktop_banner"
          src="//www.topdisplaynetwork.com/watchnew?key=fb88a499e07584b47564179548308523"
          width="728"
          height="90"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </AdTablet>

      <AdMobile>
        <iframe
          title="mobile_banner"
          src="//www.topdisplaynetwork.com/watchnew?key=4d00edeb5e29120a67095839cfb12c33"
          width="300"
          height="250"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </AdMobile>
    </MainContainer>
  );
};

export default Main;
