package com.provectus.kafka.ui.config;

import org.springframework.boot.autoconfigure.web.ServerProperties;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.server.WebFilter;
import org.springframework.web.server.WebFilterChain;
import reactor.core.publisher.Mono;

@Component

public class CustomWebFilter implements WebFilter {

  private final ServerProperties serverProperties;

  public CustomWebFilter(ServerProperties serverProperties) {
    this.serverProperties = serverProperties;
  }

  @Override
  public Mono<Void> filter(ServerWebExchange exchange, WebFilterChain chain) {
    String contextPath = serverProperties.getServlet().getContextPath() != null 
        ? serverProperties.getServlet().getContextPath() : "";

    if (exchange.getRequest().getURI().getPath().equals(contextPath + "/")
        || exchange.getRequest().getURI().getPath().startsWith(contextPath + "/ui")) {
      return chain.filter(
          exchange.mutate().request(exchange.getRequest().mutate().path("/index.html").build())
              .build()
      );
    } else if (exchange.getRequest().getURI().getPath().startsWith(contextPath)) {
      return chain.filter(
          exchange.mutate().request(exchange.getRequest().mutate().contextPath(contextPath).build())
              .build()
      );
    }    

    return chain.filter(exchange);
  }
}